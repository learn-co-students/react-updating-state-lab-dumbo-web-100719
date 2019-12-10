// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {

    constructor(){
        super()

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

    handleBitrateClick = () => {
        let newBitrate = 12
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: newBitrate,
            }
        }, console.log(this.state))
    }

    handleResolutionClick = () => {
        let newRes = '720p'
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: newRes
                }
            }
        }, console.log(this.state))
    }

    render() {
        return <div>
        <button
        className="bitrate"
        onClick={this.handleBitrateClick}>
        Bitrate
        </button>
        <button 
        className='resolution'
        onClick={this.handleResolutionClick}>
        Resolution
        </button>
    </div>
    }
}
