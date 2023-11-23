import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EdipPokemon() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editedPokemon, setEditedPokemon] = useState({
    name: "",
    img: "",
    category: "",
    desc: "",
  });

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const response = await fetch(
        `https://pokedex-app-with-react-default-rtdb.firebaseio.com/pokemons/${id}.json`
      );

      const data = await response.json();
      setEditedPokemon(data);
    };

    fetchPokemonDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPokemon((prevPokemon) => ({
      ...prevPokemon,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://pokedex-app-with-react-default-rtdb.firebaseio.com/pokemons/${id}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedPokemon),
      }
    );

    if (response.ok) {
      navigate(`/${id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={editedPokemon.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="img"
          value={editedPokemon.img}
          onChange={handleChange}
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={editedPokemon.category}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="desc"
          value={editedPokemon.desc}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Save Changes</button>
    </form>
  );
}
