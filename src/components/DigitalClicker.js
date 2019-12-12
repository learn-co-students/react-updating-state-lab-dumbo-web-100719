import React from 'react';

export default class DigitalClicker extends React.Component {
  
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => {
      return {timesClicked: prevState.timesClicked + 1}
    })
  }

  render() {
    // console.log(this.state)
    return (
      <button onClick={this.handleClick}>
        { this.state.timesClicked}
      </button>
    )
    
  }
}

