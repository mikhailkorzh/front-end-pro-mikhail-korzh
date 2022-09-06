import city from '../city.jpeg';
import '../App.css';
import React from 'react';
import Cards from './Cards';

const postInfo = [
    {
        img: city,
        name: 'Jon',
        phone: '+380123456789'
    },
    {
        img: city,
        name: 'Alice',
        phone: '+380123123123'
    },
    {
        img: city,
        name: 'Bob',
        phone: '+380123213543'
    }
]

function CardsReader() {
    const click = (index) => {
        console.log('Clicked', index);
    };

    return (
        <div className="App">
            {postInfo.map((post, index) =>
                <Cards
                    key={`post-${index}`}
                    name={post.name}
                    phone={post.phone}
                    index={index}
                    image={post.img}
                    click={click}/>
            )}
        </div>
    );
}

export default CardsReader;
