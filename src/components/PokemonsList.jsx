import PokemonListItem from "./PokemonsListItem";
import { useCallback, useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  //fetch data
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

  //Filter by category
  const filteredByCategory = (x) => {
    setSelectedCategory(x);
  };
  const getFilteredPokemons = () => {
    if (selectedCategory === null) {
      return pokemons;
    } else {
      return pokemons.filter((x) => x.category === selectedCategory);
    }
  };

  return (
    <>
      <section>
        <button onClick={() => filteredByCategory(null)}>All</button>
        <button onClick={() => filteredByCategory("fire")}>Fire</button>
        <button onClick={() => filteredByCategory("electric")}>Electric</button>
      </section>
      <PokemonListItem event={getFilteredPokemons()} />
    </>
  );
}
