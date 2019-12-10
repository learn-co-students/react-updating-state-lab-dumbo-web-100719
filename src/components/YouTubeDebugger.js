// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

    state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
    }

    changeBitrate = () => {
        this.setState({
            settings: {...this.state.settings, bitrate: 12}
        }, console.log(this.state.settings.bitrate))
    }

    changeResolution = () => {
        this.setState({
            settings: {...this.state.settings, video:{...this.state.settings.video, resolution: "720p"}}
        }, console.log(this.state.settings.video))
    }
    


    render() {
        return (
            <div>
            <button
            className = "bitrate"
            onClick = {this.changeBitrate}
            >
            I'm Dumb and Hami Hates Me
            </button>
             <button
             className = "resolution"
             onClick = {this.changeResolution}
             >
            Hami thinks I'm Dope             
            </button>
             </div>
        )
    }
}
