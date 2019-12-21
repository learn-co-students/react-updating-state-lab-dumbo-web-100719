// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {

    state ={
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    }

    updateBitrate = () => {
        this.setState(previousState => {
            return{
             settings: {
                 ...previousState.settings,
                 bitrate: 12
                }
            }
        })
    }

    updateResolution = () => {
        this.setState(previousState => {
            return{
             settings: {
                 ...previousState.settings,
                 video: {
                    resolution: '720p'
                 }
                }
            }
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <button className= 'bitrate' onClick={this.updateBitrate}>.bitrate</button>
                <button className= 'resolution' onClick={this.updateResolution}>.bitrate</button>
            </div>
        );
    }
}

export default YouTubeDebugger;