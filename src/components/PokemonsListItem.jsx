import { useNavigate } from "react-router-dom";
import "./PokemonsListItem.css";

export default function PokemonListItem({ event }) {
  const navigate = useNavigate();

  const navigateDetails = (id) => {
    navigate(`/${id}`);
  };

  function capitalize(x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
  }

  return (
    <>
      <section>
        {event.map((x) => (
          <div className="card" key={x.id}>
            <h4>{x.name}</h4>
            <img src={x.img} />
            <h4>{capitalize(x.category)}</h4>
            <button
              onClick={() => {
                navigateDetails(x.id);
              }}
            >
              details
            </button>
          </div>
        ))}
      </section>
    </>
  );
}
