import "./PokemonPage.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import homeArrow from "../assets/home-arrow.png";
import deleteIcon from "../assets/delete-icon.png";
import editIcon from "../assets/edit-icon.png";
import loadingIcon from "../assets/loading.gif";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function PokemonPage() {
  const { id } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const navigateEdit = () => {
    navigate(`/${id}/edit`);
  };

  //fetch data
  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const response = await fetch(
        `https://pokedex-app-with-react-default-rtdb.firebaseio.com/pokemons/${id}.json`
      );

      const data = await response.json();

      setLoading(false);
      setSelectedPokemon(data);
    };

    fetchPokemonDetails();
  }, [id]);

  //Delete data
  const handleDelete = async () => {
    const response = await fetch(
      `https://pokedex-app-with-react-default-rtdb.firebaseio.com/pokemons/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      toast.error("Pokemon deleted.");
      navigate("/");
    }
  };
  //

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
        <section className="orderbox">
          <motion.div whileHover={{ paddingRight: 5 }} className="back">
            <Link style={{ textDecoration: "none", color: "#e3e3e3" }} to="/">
              <img src={homeArrow} />
              <p>Go Home</p>
            </Link>
          </motion.div>
          <div className="pokebox">
            <div>
              <h1>{selectedPokemon?.name}</h1>
              <img src={selectedPokemon?.img} />
              <h2>{selectedPokemon?.category}</h2>
              <p>{selectedPokemon?.desc.substring()}</p>
              <div className="pokebox-buttons">
                <div onClick={handleDelete}>
                  <motion.img whileHover={{ scale: 1.1 }} src={deleteIcon} />
                </div>
                <div onClick={navigateEdit}>
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    className="edit"
                    src={editIcon}
                  />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </section>
      )}
    </>
  );
}
