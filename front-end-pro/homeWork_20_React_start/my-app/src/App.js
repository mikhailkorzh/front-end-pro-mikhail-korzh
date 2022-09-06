import './App.css';
import React from 'react';

function formatDate(date) {
    return date.toLocaleDateString();
}

function Greeting(props) {
    return (
        <div className="Hello">
            <img className="Image"
                 src={props.author.avatarUrl}/>
            <div className="UserGreeting">
                {props.author.greeting}
            </div>
        </div>
    )
}

class GreetingKitty extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            clickCount: 0
        }

        this.onCardClick = this.onCardClick.bind(this);
    }

    onCardClick(){
        this.setState({clickCount: this.state.clickCount + 1})
    }
    render() {
        return (
            <div onClick={this.onCardClick}>
                <img src={this.props.author.avatarUrl} alt='logo'/>
                <p>{this.props.author.avatarName}</p>
                {this.state.clickCount}
            </div>
        )
    }
}

const comment = {
    date: new Date(),
    author: {
        greeting: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/200/300',
        avatarName: 'Kitty'
    }
}

class Timer extends React.Component {
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
        return(<p>{`${this.state.someText} - ${this.state.ticks}`}</p>)
    }
}

function App() {
    return (
        <React.Fragment>
            <div className='App'>
                <header className='App-header'>
                    <Timer/>
                    <Greeting
                        author={comment.author}/>
                    <GreetingKitty
                        author={comment.author}/>
                </header>
            </div>
        </React.Fragment>
    );
}

export default App;
