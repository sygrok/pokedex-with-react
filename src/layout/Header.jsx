import "./Header.css";
import downArrow from "../assets/down-arrow.png";
import pokeball from "../assets/pokeball.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
      <header>
        <h1>Pokedex App</h1>

        <img className="pokeball" src={pokeball} />

        <h3>By Berkay Anduv</h3>
      </header>
    </Link>
  );
}
