import { Link, useNavigate } from "react-router-dom";
import PokemonListItem from "./PokemonsListItem";
import { useCallback, useEffect, useState } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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

  const newHandler = () => {
    navigate("/new");
  };

  return (
    <>
      <section className="categories">
        <ul>
          <li className="a" onClick={() => filteredByCategory(null)}>
            All
          </li>
          <li className="b" onClick={newHandler}>
            +New
          </li>
          <li className="c" onClick={() => filteredByCategory("fire")}>
            Fire
          </li>
          <li className="d" onClick={() => filteredByCategory("electric")}>
            Electric
          </li>
          <li className="e" onClick={() => filteredByCategory("water")}>
            Water
          </li>
          <li className="f" onClick={() => filteredByCategory("grass")}>
            Grass
          </li>
          <li className="g" onClick={() => filteredByCategory("flying")}>
            Flying
          </li>
          <li className="k" onClick={() => filteredByCategory("fairy")}>
            Fairy
          </li>
          <li className="l" onClick={() => filteredByCategory("poison")}>
            Poison
          </li>
          <li className="m" onClick={() => filteredByCategory("fighting")}>
            Fighting
          </li>
          <li className="n" onClick={() => filteredByCategory("psychic")}>
            Psychic
          </li>
          <li className="p" onClick={() => filteredByCategory("rock")}>
            Rock
          </li>
        </ul>
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
