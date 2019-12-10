// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    state = {
        timesClicked: 0

    }

    increment = () => {
        this.setState(prevState =>({
            timesClicked: prevState.timesClicked + 1
        }))
    }
    


    render() {
        const {timesClicked} = this.state
        return (
            <button
            onClick= {this.increment}
            
            >
                {timesClicked}
            </button>
        )
    }
}
