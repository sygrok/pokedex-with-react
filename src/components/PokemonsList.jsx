import PokemonListItem from "./PokemonsListItem";
import { useCallback, useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await fetch(
      "https://pokedex-app-with-react-default-rtdb.firebaseio.com/pokemons.json"
    );

    const data = await response.json();

    const loadedData = [];

    for (const key in data) {
      loadedData.push({
        id: key,
        name: data[key].name,
        img: data[key].img,
        category: data[key].category,
      });
    }
    setPokemons(loadedData);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <PokemonListItem event={pokemons} />
    </>
  );
}
