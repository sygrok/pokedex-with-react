import electric from "../assets/icons/electric.png";
import fairy from "../assets/icons/fairy.png";
import fighting from "../assets/icons/fighting.png";
import fire from "../assets/icons/fire.png";
import flying from "../assets/icons/flying.png";
import ghost from "../assets/icons/ghost.png";
import grass from "../assets/icons/grass.png";
import poison from "../assets/icons/poison.png";
import psyhic from "../assets/icons/psyhic.png";
import rock from "../assets/icons/rock.png";
import water from "../assets/icons/water.png";
import all from "../assets/icons/all.png";
import loadingIcon from "../assets/loading.gif";

import { useNavigate } from "react-router-dom";
import PokemonListItem from "./PokemonsListItem";
import { useCallback, useEffect, useState } from "react";
import "./PokemonList.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
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

  const newHandler = () => {
    navigate("/new");
  };

  let hContent = selectedCategory;

  if (hContent === null) {
    hContent = "All Pokemons";
  }

  const { scrollY } = useScroll();

  const sideOpacity = useTransform(
    scrollY,
    [550, 650, 700, 750, 800],
    [0, 0.25, 0.5, 0.75, 1]
  );

  const sidePosition = useTransform(scrollY, [550, 650, 700], [-150, -100, 0]);

  const sideCategories = (
    <motion.section
      className="categories"
      style={{ opacity: sideOpacity, left: sidePosition }}
    >
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
        <li className="z" onClick={() => filteredByCategory("ghost")}>
          Ghost
        </li>
      </ul>
    </motion.section>
  );

  const mainCategories = (
    <section className="main-categories">
      <ul>
        <li className="aa" onClick={() => filteredByCategory(null)}>
          <img src={all} />
        </li>

        <li className="cc" onClick={() => filteredByCategory("fire")}>
          <img src={fire} />
        </li>
        <li className="dd" onClick={() => filteredByCategory("electric")}>
          <img src={electric} />
        </li>
        <li className="ee" onClick={() => filteredByCategory("water")}>
          <img src={water} />
        </li>
        <li className="ff" onClick={() => filteredByCategory("grass")}>
          <img src={grass} />
        </li>
        <li className="gg" onClick={() => filteredByCategory("flying")}>
          <img src={flying} />
        </li>
        <li className="kk" onClick={() => filteredByCategory("fairy")}>
          <img src={fairy} />
        </li>
        <li className="ll" onClick={() => filteredByCategory("poison")}>
          <img src={poison} />
        </li>
        <li className="mm" onClick={() => filteredByCategory("fighting")}>
          <img src={fighting} />
        </li>
        <li className="nn" onClick={() => filteredByCategory("psychic")}>
          <img src={psyhic} />
        </li>
        <li className="pp" onClick={() => filteredByCategory("rock")}>
          <img src={rock} />
        </li>
        <li className="zz" onClick={() => filteredByCategory("ghost")}>
          <img src={ghost} />
        </li>
      </ul>
    </section>
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
