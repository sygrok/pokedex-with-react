import { useRef } from "react";
import "./NewPokemonPage.css";

export default function NewPokemonPage() {
  const nameRef = useRef("");
  const descRef = useRef("");
  const imgRef = useRef("");
  const categoryRef = useRef("");

  async function addPokemonHandler(data) {
    const response = await fetch(
      "https://pokedex-app-with-react-default-rtdb.firebaseio.com/pokemons.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    );
    const responseData = await response.json();
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const pokemon = {
      name: nameRef.current.value,
      desc: descRef.current.value,
      category: categoryRef.current.value,
      img: imgRef.current.value,
    };

    addPokemonHandler(pokemon);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div className="control">
          <label htmlFor="Description">Description</label>
          <textarea rows="5" id="Description" ref={descRef}></textarea>
        </div>
        <div className="control">
          <label htmlFor="img">Image</label>
          <input type="text" id="img" ref={imgRef} />
        </div>
        <div className="control">
          <label htmlFor="category">Category</label>
          <input type="text" id="category" ref={categoryRef} />
        </div>
        <button>Add Pokemon</button>
      </form>
    </>
  );
}
