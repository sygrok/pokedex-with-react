import PokemonListItem from "./PokemonsListItem";
import { useCallback, useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  //Filter by category or search term
  const filteredByCategory = (x) => {
    setSelectedCategory(x);
  };

  const getFilteredPokemons = () => {
    let filteredPokemonList = [...pokemons];

    if (selectedCategory !== null) {
      filteredPokemonList = filteredPokemonList.filter(
        (x) => x.category === selectedCategory
      );
    }
    if (searchTerm !== "") {
      filteredPokemonList = filteredPokemonList.filter((x) =>
        x.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredPokemonList;
  };

  return (
    <>
      <section>
        <button onClick={() => filteredByCategory(null)}>All</button>
        <button onClick={() => filteredByCategory("fire")}>Fire</button>
        <button onClick={() => filteredByCategory("electric")}>Electric</button>
      </section>
      <div>
        <input
          type="text"
          placeholder="Search Pokemon"
          value={searchTerm}
          onChange={(x) => setSearchTerm(x.target.value)}
        />
      </div>
      <PokemonListItem event={getFilteredPokemons()} />
    </>
  );
}
