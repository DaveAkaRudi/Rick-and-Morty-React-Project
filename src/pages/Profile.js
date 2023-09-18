import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

function Profile() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => {
        console.error("Error fetching character data:", error);
      });
  }, [id]);

  if (!character) {
    return (
      <div>
        <h1>Loading...</h1>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Character Profile</h1>
      </div>
      <div className="character-profile">
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <p>Species: {character.species}</p>
        <p>Status: {character.status}</p>
      </div>
      <div className="back-button">
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}

export default Profile;
