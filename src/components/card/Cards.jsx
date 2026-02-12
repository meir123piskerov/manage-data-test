import React, { useState } from "react";
import data from "../../data/data.json";
import Card from "../profile/Card.jsx";
import "./cards.css";
function Cards() {
  console.log(data);

  const [search, setSearch] = useState(data);
  return (
    <div className="cards" id="cards">
      {search.map((user) => {
        return (
          <Card
            name={user.name}
            organization={user.organization}
            attacksCount={user.attacksCount}
            status={user.status}
            relationToIsraelSummary={user.relationToIsraelSummary}
            imageUrl={user.imageUrl}
            search={search}
            setSearch={setSearch}
          ></Card>
        );
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
