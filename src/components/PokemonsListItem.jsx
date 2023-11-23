import { useNavigate } from "react-router-dom";
import "./PokemonsListItem.css";

export default function PokemonListItem({ event }) {
  const navigate = useNavigate();

  const navigateDetails = (id) => {
    navigate(`/${id}`);
  };

  return (
    <>
      <section>
        {event.map((x) => (
          <div className="card" key={x.id}>
            <h4>{x.name}</h4>
            <img src={x.img} />
            <h4>{x.category}</h4>
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
