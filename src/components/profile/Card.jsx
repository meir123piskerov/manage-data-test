import React from "react";
import "./card.css";
function Card(props) {
  console.log(props);

  return (
    <div id="card" className="card">
      <div className="card-div">
        <img src={props.imageUrl} alt="" />
        <div>
          <h1>{props.name}</h1>
          <p>{props.organization}</p>
        </div>
      </div>
      <div>
        {" "}
        <p>{props.attacksCount}</p>
        <p>{props.status}</p>
        <p>{props.relationToIsraelSummary}</p>
      </div>
    </div>
  );
}

export default Card;

// organization={user.organization}
//             attacksCount={user.attacksCount}
//             status={user.status}
//             relationToIsraelSummary={user.relationToIsraelSummary}
//             imageUrl={user.imageUrl}
//             search={search}
//             setSearch={setSearch}
