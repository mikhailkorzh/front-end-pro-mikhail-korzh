import "../App.css";
import React, { useEffect, useState, useCallback } from "react";
import Cards from "./Cards";
import CircularIndeterminate from "./CircularIndeterminate";
import axios from "axios";

const charactersID = function getCharactesID() {
  let charactersArray = [];
  for (let i = 0; i < 299; i++) {
    charactersArray.push(i);
  }
  return charactersArray.toString();
};

const charactersApi = "https://rickandmortyapi.com/api/character";

function CardsReader() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getCharacters = useCallback(() => {
    setIsLoading(true);
    axios.get(charactersApi, { params: { name: filter } }).then((response) => {
      setCharacters(response.data.results);
      setIsLoading(false);
    });
  }, [filter]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     axios.get(charactersApi).then((response) => {
  //       setCharacters(response.data);
  //       setIsLoading(false);
  //     });
  //   }, [filter]);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const renderCharacter = (
    <div className="container">
      {characters.length > 0 ? (
        characters
          //   .filter((character) => {
          //     return character.name.toLowerCase().includes(filter.toLowerCase());
          //   })
          .map((character, index) => (
            <Cards
              key={character.id}
              name={character.name}
              species={character.species}
              status={character.status}
              location={character.location.name}
              image={character.image}
            />
          ))
      ) : (
        <h1>Enter name</h1>
      )}
    </div>
  );

  return (
    <div className="App">
      <input
        placeholder="Enter Post Title"
        onChange={handleChange}
        autoComplete="off"
      />
      <button onClick={getCharacters}>Get Characters</button>
      {isLoading ? <CircularIndeterminate /> : renderCharacter}
    </div>
  );
}

export default CardsReader;
