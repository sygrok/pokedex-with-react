import loadingIcon from "../assets/loading.gif";
import { useNavigate } from "react-router-dom";
import PokemonListItem from "./PokemonsListItem";
import { useCallback, useEffect, useState } from "react";
import "./PokemonList.css";
import MainCategories from "./MainCategories";
import SideCategories from "./SideCategories";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

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
        desc: data[key].desc,
      });
    }
    setPokemons(loadedData);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData, setLoading]);

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

  let hContent = selectedCategory;

  if (hContent === null) {
    hContent = "All Pokemons";
  }

  const sideCategories = (
    <SideCategories filteredByCategory={filteredByCategory} />
  );

  const mainCategories = (
    <MainCategories filteredByCategory={filteredByCategory} />
  );

  return (
    <>
      {sideCategories}
      <div className="filter-section">
        <div className="filter-text">
          <h1>Filter Pokemons!</h1>
        </div>
        <hr />

        <div className="filter-bottom">
          <input
            type="text"
            placeholder="Search Pokemon"
            value={searchTerm}
            onChange={(x) => setSearchTerm(x.target.value)}
          />
          {mainCategories}
        </div>
      </div>
      <h1 className="hContent">{hContent}</h1>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "150px 0",
          }}
        >
          <img
            style={{ width: "250px", borderRadius: "150px" }}
            src={loadingIcon}
          />
        </div>
      )}
      <PokemonListItem event={getFilteredPokemons()} />
    </>
  );
}
