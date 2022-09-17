import '../App.css';
import '../index.css'
import React from 'react';


function Cards(props) {
    return (
        <React.Fragment>
            <div className='card'>
                <div className='card-info'>
                    <div className='title'>
                        <h1>{props.name}</h1>
                        <div className='status'>
                            <div className={`live-status ${props.status === 'Dead' ? 'dead' : ''}`}/>
                            <p>{props.species} -- {props.status}</p>
                        </div>
                    </div>
                    <div className='content'>{props.location}</div>
                </div>
                <div className='card-image'>
                    <img src={props.image} alt='Some image'/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Cards;


