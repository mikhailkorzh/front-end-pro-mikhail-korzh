import React from "react";

export class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ticks: 0,
            someText: 'Ticks'
        }
    }

    componentDidMount() {
        this.timerID = setInterval(()=>{
            this.setState({ticks: this.state.ticks + 1})
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return(<p>{`${this.state.someText} - ${this.state.ticks}s`}</p>)
    }
}
