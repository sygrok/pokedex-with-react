import { useState } from "react";
import "./NewPokemonPage.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function NewPokemonPage() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  async function addPokemonHandler(data) {
    const response = await fetch(
      "https://pokedex-app-with-react-default-rtdb.firebaseio.com/pokemons.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    );
    await response.json();
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    const pokemon = {
      name,
      desc,
      category,
      img,
    };

    addPokemonHandler(pokemon);

    setName("");
    setDesc("");
    setImg("");
    setCategory("");
  };

  return (
    <>
      <section className="new-section-order">
        <div className="pokebox-new">
          <div>
            <h1>{name}</h1>
            <img src={img} />
            <h2>{category}</h2>
            <p>{desc.substring()}</p>
          </div>
        </div>
        <div className="newbox">
          <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              maxlength="15"
              value={name}
              onChange={(x) => setName(x.target.value)}
            />
            <label htmlFor="Description">Description</label>
            <textarea
              rows="5"
              id="Description"
              value={desc}
              onChange={(x) => setDesc(x.target.value)}
            ></textarea>
            <label htmlFor="img">Image</label>
            <input
              type="text"
              id="img"
              value={img}
              onChange={(x) => setImg(x.target.value)}
            />
            <label htmlFor="category">Category</label>
            <select
              name="category"
              onChange={(x) => setCategory(x.target.value)}
            >
              <option value="" selected disabled hidden>
                Select
              </option>
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
            <div className="buttonbox-new">
              <motion.button
                whileHover={{ color: "#f95959" }}
                onClick={() => navigate("/")}
              >
                Back
              </motion.button>

              <motion.button type="submit" whileHover={{ color: "#f95959" }}>
                Add
              </motion.button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
