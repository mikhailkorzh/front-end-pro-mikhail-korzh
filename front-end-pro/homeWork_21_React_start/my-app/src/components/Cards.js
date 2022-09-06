import '../App.css';
import React from 'react';
import city from '../city.jpeg';

const postStyle = {
    image: {
        width: '400px',
    },
    frame: {
        border: "1px solid white"
    }
}

function Cards (props) {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)
    return (
        <div style={postStyle.frame} onClick={onClick} >
            { showResults ?
                <div id="contacts" className="search-results">
                    {props.name}
                    {props.phone}
                </div>
                : null }
            <img src={props.image} style={postStyle.image} alt="logo" />
        </div>
    );
}

export default Cards;


