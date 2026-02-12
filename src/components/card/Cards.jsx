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

// {
//     "name": "Walid Shami",
//     "organization": "Black Cedar Brigade",
//     "attacksCount": 24,
//     "status": "active",
//     "relationToIsraelSummary": "Operational commander with a history of high-impact planning.",
//     "imageUrl": "https://i.ibb.co/Hpf9JhhF/12.png"
//   },
