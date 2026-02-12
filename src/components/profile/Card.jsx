import "./card.css";
function Card({
  imageUrl,
  organization,
  name,
  attacksCount,
  status,
  relationToIsraelSummary,
}) {
  return (
    <div id="card" className="card">
      <div className="card-div">
        <img src={imageUrl} alt="" />
        <div>
          <h1>{name}</h1>
          <p>{organization}</p>
        </div>
      </div>
      <div>
        <p>{attacksCount}</p>
        <p>{status}</p>
        <p>{relationToIsraelSummary}</p>
      </div>
    </div>
  );
}

export default Card;
