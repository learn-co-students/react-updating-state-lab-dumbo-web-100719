// Code DigitalClicker Component Here
import React, { Component } from 'react'

export class DigitalClicker extends Component {

    state = {
         timesClicked: 0
    }



    hadleClick= () => {
       this.setState({
            timesClicked: this.state.timesClicked + 1
        })
        
    }

    render() {
        
        return (
            <div>
                <button onClick={this.hadleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker
