import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PokemonPage() {
  const { id } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState();
  const navigate = useNavigate();

  const navigateEdit = () => {
    navigate(`/${id}/edit`);
  };

  //fetch data
  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const response = await fetch(
        `https://pokedex-app-with-react-default-rtdb.firebaseio.com/pokemons/${id}.json`
      );

      const data = await response.json();
      setSelectedPokemon(data);
    };

    fetchPokemonDetails();
  }, [id]);

  //Delete data
  const handleDelete = async () => {
    const response = await fetch(
      `https://pokedex-app-with-react-default-rtdb.firebaseio.com/pokemons/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      navigate("/");
    }
  };
  //

  if (!selectedPokemon) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{selectedPokemon.name}</h1>
      <img src={selectedPokemon.img} alt={selectedPokemon.name} />
      <h4>Category: {selectedPokemon.category}</h4>
      <h6>{selectedPokemon.desc}</h6>

      <button onClick={handleDelete}>delete</button>
      <button onClick={navigateEdit}>edit</button>
    </>
  );
}
