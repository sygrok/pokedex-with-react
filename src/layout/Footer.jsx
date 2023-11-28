import { Link } from "react-router-dom";
import pokeball from "../assets/pokeball.png";
import "./Footer.css";
import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="1">
          <ul>
            <li>
              <h1>Pokedex App</h1>
            </li>
            <motion.li whileHover={{ marginLeft: 5 }} whileTap={{ scale: 1.2 }}>
              <Link to="/">
                Home <hr />
              </Link>
            </motion.li>
            <motion.li whileHover={{ marginLeft: 5 }} whileTap={{ scale: 1.2 }}>
              <Link to="/new">
                New <hr />
              </Link>
            </motion.li>
            <motion.li whileHover={{ marginLeft: 5 }} whileTap={{ scale: 1.2 }}>
              <a href="https://github.com/sygrok/Pokedex">
                Angular <hr />
              </a>
            </motion.li>
            <motion.li whileHover={{ marginLeft: 5 }} whileTap={{ scale: 1.2 }}>
              <a href="https://www.pokemon.com/us/pokedex">
                Official <hr />
              </a>
            </motion.li>
          </ul>
        </div>
        <div className="2">
          <ul>
            <motion.li>
              <h1>Social</h1>
            </motion.li>
            <motion.li whileHover={{ marginLeft: 5 }} whileTap={{ scale: 1.2 }}>
              <a href="https://github.com/sygrok">
                Github
                <hr />
              </a>
            </motion.li>
            <motion.li whileHover={{ marginLeft: 5 }} whileTap={{ scale: 1.2 }}>
              <a href="https://www.linkedin.com/in/berkayanduv/">
                LinkedIn
                <hr />
              </a>
            </motion.li>
            <motion.li whileHover={{ marginLeft: 5 }} whileTap={{ scale: 1.2 }}>
              <a href="https://www.instagram.com/sygrok/">
                Instagram
                <hr />
              </a>
            </motion.li>
            <motion.li whileHover={{ marginLeft: 5 }} whileTap={{ scale: 1.2 }}>
              <a href="https://www.facebook.com/brk6767">
                Facebook
                <hr />
              </a>
            </motion.li>
          </ul>
        </div>
        <div className="3">
          <Link to="/">
            <motion.img
              whileHover={{ scale: 1.1, rotate: 34 }}
              src={pokeball}
            />
          </Link>
        </div>
      </div>
      <div>
        <p>
          This Website was created by <span>Berkay Anduv</span> for training
          purposes.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
