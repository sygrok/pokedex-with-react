import "./PokemonsListItem.css";

export default function PokemonListItem({ event }) {
  return (
    <>
      <section>
        {event.map((x) => (
          <div className="card" key={x.id}>
            <h4>{x.name}</h4>
            <img src={x.img} />
            <h4>{x.category}</h4>
          </div>
        ))}
      </section>
    </>
  );
}
