import './App.css';
import React from 'react';

const posts = [
    {id: 1, title: 'Hello World!', content: 'Welcome to learning React!'},
    {id: 2, title: 'Hello guys!', content: 'You can install React from npm.'},
    {id: 3, title: 'Hello people!', content: 'Welcome to learning React!'}

];

function Post() {
    const content = posts.map((post,index) =>
        <li key={index}>
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
        </li>
    );
    return (
        <div>
            <ul>
                {content}
            </ul>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Post/>
            </header>
        </div>
    );
}

export default App;
