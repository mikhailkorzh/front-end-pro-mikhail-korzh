import './App.css';
import React from 'react';

function formatDate(date) {
    return date.toLocaleDateString();
}

function Greeting(props) {
    return (
        <React.Fragment>
        <div className="Hello">
            <img className="Image"
                 src={props.author.avatarUrl} />
            <div className="UserGreeting">
                {props.author.greeting}
            </div>
        </div>
        </React.Fragment>
    )
}

class GreetingKitty extends React.Component {
    render() {
        return(
            <div className="Hello">
                <img className="Image"
                     src={this.props.author.avatarUrl} />
                <div className="UserGreeting">
                    {this.props.author.avatarName}
                </div>
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

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Greeting
                author={comment.author}/>
                <GreetingKitty
                author={comment.author}/>
            </header>
        </div>
    );
}

export default App;
