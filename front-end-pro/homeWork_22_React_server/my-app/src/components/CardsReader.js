import '../App.css';
import React, {useState} from 'react';
import Cards from './Cards';
import axios from 'axios';

const charactersID = function getCharactesID() {
    let charactersArray = [];
    for (let i = 0; i < 299; i++) {
        charactersArray.push(i);
    }
    return charactersArray.toString();
};

const charactersApi = `https://rickandmortyapi.com/api/character/${charactersID()}`;

function CardsReader() {
    const [post, setPost] = React.useState(null);
    const [query, setQuery] = useState('');

    React.useEffect(() => {
        axios.get(charactersApi).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    const handleChange = event => {
        event.preventDefault();
        if (!event.target.value) {
            console.log('input value is empty');
        } else {
            console.log('input value is NOT empty');
        }
        setQuery(event.target.value);
    };


    return (
        <div className='App'>
            <input placeholder="Enter Post Title"
                   onChange={handleChange}
                   autoComplete="off">
            </input>

            <div className="container">
                {post.filter(post => {
                    if (post.name.toLowerCase().includes(query.toLowerCase())) {
                        return post;
                    }
                }).map((post, index) =>
                    <Cards
                        key={index}
                        name={post.name}
                        species={post.species}
                        status={post.status}
                        location={post.location.name}
                        image={post.image}
                    />
                )}
            </div>
        </div>
    );
}

export default CardsReader;
