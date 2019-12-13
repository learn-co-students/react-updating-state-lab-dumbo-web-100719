// Code YouTubeDebugger Component Here
import React ,{Component} from 'react'
class YouTubeDebugger extends Component {
    constructor(){
        super();

        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }
    handleChange = () => {
        this.setState({
          settings: {
            ...this.state.settings,
            bitrate: 12
          }
        });
    };
    handleChangeResolution = () => {
        this.setState({
          settings: {
            ...this.state.settings,
            video: {
              ...this.state.settings.video,
              resolution: '720p'
            }
          }
    })
    } 

    render(){
        return(
            <div>
                <button className='bitrate' onClick={this.handleChange}>Change bitrate: {this.state.settings.bitrate}</button>
                <button className='resolution' onClick={this.handleChangeResolution}>Change resolution: {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}
export default YouTubeDebugger
