// Code DigitalClicker Component Here
import React ,{Component} from 'react'

class DigitalClicker extends Component{
    constructor(){
        super();
    
        this.state = {
            timesClicked : 0,
        }
    }
    hasBeenClicked = ( ) =>{
        this.setState({
            timesClicked: this.state.timesClicked + 1
        });
        //console.log(timesClicked)
    }
    
    render(){
        return(
            <div>
                <button onClick = {this.hasBeenClicked}>{this.state.timesClicked}</button>
            </div>
    )}
}
export default DigitalClicker
