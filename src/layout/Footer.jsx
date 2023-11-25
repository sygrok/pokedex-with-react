import { Link } from "react-router-dom";
import pokeball from "../assets/pokeball.png";
import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="1">
          <ul>
            <li>
              <h1>Pokedex App</h1>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new">New</Link>
            </li>
            <li>
              <a href="https://github.com/sygrok/Pokedex">Angular</a>
            </li>
            <li>
              <a href="https://www.pokemon.com/us/pokedex">Official</a>
            </li>
          </ul>
        </div>
        <div className="2">
          <ul>
            <li>
              <h1>Social</h1>
            </li>
            <li>
              <a href="https://github.com/sygrok">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/berkayanduv/">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.instagram.com/sygrok/">Instagram</a>
            </li>
            <li>
              <a href="https://www.facebook.com/brk6767">Facebook</a>
            </li>
          </ul>
        </div>
        <div className="3">
          <img src={pokeball} />
        </div>
      </div>
      <div>
        <p>
          This Website is created by <span>Berkay Anduv</span> for training
          purposes.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
