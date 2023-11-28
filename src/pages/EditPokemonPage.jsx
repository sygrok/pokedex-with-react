import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditPokemonPage.css";
import loadingIcon from "../assets/loading.gif";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function EdipPokemon() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

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
      setLoading(false);

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
    <>
      {loading ? (
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
      ) : (
        <section className="edit-section-order">
          <div className="pokebox-edit">
            <div>
              <h1>{editedPokemon.name}</h1>
              <img src={editedPokemon.img} alt={editedPokemon.name} />
              <h2>{editedPokemon.category}</h2>
              <p>{editedPokemon.desc.substring()}</p>
            </div>
          </div>
          <div className="editbox">
            <form onSubmit={handleSubmit}>
              <label>Name</label>

              <input
                type="text"
                name="name"
                value={editedPokemon.name}
                onChange={handleChange}
              />
              <label>Image</label>
              <input
                type="text"
                name="img"
                value={editedPokemon.img}
                onChange={handleChange}
              />

              <label>Category</label>

              <select
                name="category"
                value={editedPokemon.category}
                onChange={handleChange}
              >
                <option>fire</option>
                <option>electric</option>
                <option>water</option>
                <option>grass</option>
                <option>flying</option>
                <option>fairy</option>
                <option>poison</option>
                <option>fighting</option>
                <option>psychic</option>
                <option>rock</option>
                <option>ghost</option>
              </select>

              <label>Description</label>

              <textarea
                name="desc"
                value={editedPokemon.desc}
                onChange={handleChange}
              />
              <div className="buttonbox">
                <motion.button
                  whileHover={{ color: "#f95959" }}
                  onClick={() => navigate(`/${id}`)}
                >
                  Back
                </motion.button>

                <motion.button
                  onClick={() => toast.success("Pokemon edited.")}
                  whileHover={{ color: "#f95959" }}
                  type="submit"
                >
                  Save
                </motion.button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
