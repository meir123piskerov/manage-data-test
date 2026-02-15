import Card from "../profile/Card.jsx";
import "./cards.css";
function Cards({ data }) {
  return (
    <div className="cards" id="cards">
      {data.map((user) => {
        return <Card {...user}></Card>;
      })}
    </div>
  );
}

export default Cards;
