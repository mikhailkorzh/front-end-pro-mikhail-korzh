import logo from './logo.svg';
import city from './city.jpeg';
import './App.css';
import React from 'react';

const postSyle = {
  image: {
    width: '400px',
  },
  frame: {
    border: "1px solid white"
  }
}

const postInfo = [
  {
    img: city,
    text: 'Some text'
  },
  {
    img: logo,
    text: 'Some text 1'
  },
  {
    img: logo,
    text: 'Some text 2'
  },
  {
    img: city,
    text: 'Some text 3'
  },
  {
    img: city,
    text: 'Some text 4'
  }
];

function Post (props) {
  return (
    <div style={postSyle.frame} onClick={() => {props.click(props.index)}}>
      <img src={props.image} style={postSyle.image} alt="logo" />
      <p>{props.text}</p>
    </div>
  );
}

function App() {
  const click = (index) => {
    console.log('Clicked', index)
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {postInfo.map((post, index) =>
          <Post
            key={`post-${index}`}
            text={post.text}
            index={index}
            image={post.img}
            click={click} />
        )}
      </header>
    </div>
  );
}

export default App;
