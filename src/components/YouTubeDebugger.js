// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export class YouTubeDebugger extends Component {
    state =
    {
       errors: [],
       user: null,
       settings: 
       {
            bitrate: 8,
            video: 
            {
                resolution: '1080p'
            }
        }
    }

    handleBitrateClick = () => 
    {
        this.setState({
            settings: {
            ...this.state.settings,
            bitrate: 12
            }
        })
    }

    handleVideoResolutionClick =() =>{
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


    render() {
        
        return (
            <div>
             <button className = "bitrate" onClick={this.handleBitrateClick}>{this.state.settings.bitrate}</button>

    <button className = "resolution" onClick={this.handleVideoResolutionClick}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}

export default YouTubeDebugger
