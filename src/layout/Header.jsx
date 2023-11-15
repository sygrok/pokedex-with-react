import "./Header.css";
import downArrow from "../assets/down-arrow.png";
import pokeball from "../assets/pokeball.png";

export default function Header() {
  return (
    <header>
      <h1>Pokedex App</h1>
      <img className="pokeball" src={pokeball} />

      {/* <img className="down-arrow" src={downArrow} /> */}
      <h3>By Berkay Anduv</h3>
    </header>
  );
}
