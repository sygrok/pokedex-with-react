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
      <section className="cards-section">
        {event.map((x) => (
          <div className="card" key={x.id}>
            <h4>{x.name}</h4>
            <img src={x.img} />

            <div className="card-desc">
              <p>{x.desc.substring(0, 30)}...</p>

              <div className="card-bottom">
                <p>{capitalize(x.category)}</p>
                <button
                  onClick={() => {
                    navigateDetails(x.id);
                  }}
                >
                  &#10140;
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
