import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

function SideCategories({ filteredByCategory }) {
  const navigate = useNavigate();

  const { scrollY } = useScroll();

  const sideOpacity = useTransform(scrollY, [450, 480, 550], [0, 0.5, 1]);

  const sidePosition = useTransform(scrollY, [450, 480, 550], [-150, -100, 0]);

  const newHandler = () => {
    navigate("/new");
  };
  return (
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
}

export default SideCategories;
