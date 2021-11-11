import { Component } from "react";
import React from "react"
// your Bomb code here!
class Bomb extends Component {
        constructor(props) {
            super(props);
            this.state = { secondsLeft: this.props.initialCount };
        }
    render() {
        if (this.state.secondsLeft ) {
            return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        }
        return <p>Boom!</p>
    }
}

export default Bomb;
