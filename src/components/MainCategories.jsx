import React from "react";
import { AnimatePresence, motion } from "framer-motion";
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

function MainCategories({ filteredByCategory }) {
  return (
    <AnimatePresence>
      <motion.section className="main-categories">
        <ul>
          <li className="aa" onClick={() => filteredByCategory(null)}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 10,
              }}
              src={all}
            />
          </li>

          <li className="cc" onClick={() => filteredByCategory("fire")}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 10,
              }}
              src={fire}
            />
          </li>
          <li className="dd" onClick={() => filteredByCategory("electric")}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 10,
              }}
              src={electric}
            />
          </li>
          <li className="ee" onClick={() => filteredByCategory("water")}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 10,
              }}
              src={water}
            />
          </li>
          <li className="ff" onClick={() => filteredByCategory("grass")}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 10,
              }}
              src={grass}
            />
          </li>
          <li className="gg" onClick={() => filteredByCategory("flying")}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 10,
              }}
              src={flying}
            />
          </li>
          <li className="kk" onClick={() => filteredByCategory("fairy")}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 10,
              }}
              src={fairy}
            />
          </li>
          <li className="ll" onClick={() => filteredByCategory("poison")}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 10,
              }}
              src={poison}
            />
          </li>
          <li className="mm" onClick={() => filteredByCategory("fighting")}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 10,
              }}
              src={fighting}
            />
          </li>
          <li className="nn" onClick={() => filteredByCategory("psychic")}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 10,
              }}
              src={psyhic}
            />
          </li>
          <li className="pp" onClick={() => filteredByCategory("rock")}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 10,
              }}
              src={rock}
            />
          </li>
          <li className="zz" onClick={() => filteredByCategory("ghost")}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 10,
              }}
              src={ghost}
            />
          </li>
        </ul>
      </motion.section>
    </AnimatePresence>
  );
}

export default MainCategories;
