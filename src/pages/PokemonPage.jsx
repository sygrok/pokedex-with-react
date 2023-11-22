import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PokemonPage() {
  const { id } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState();

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

  if (!selectedPokemon) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{selectedPokemon.name}</h1>
      <img src={selectedPokemon.img} alt={selectedPokemon.name} />
      <h4>Category: {selectedPokemon.category}</h4>
    </>
  );
}
