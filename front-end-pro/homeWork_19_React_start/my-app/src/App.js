import './App.css';
import React from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Welcome name='Alice'/>
                <Welcome name='Mike'/>
                <Welcome name='Chris'/>
            </header>
        </div>
    );
}

export default App;
