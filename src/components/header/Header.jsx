import React, { useState } from "react";
import data2 from "../../data/data.json";
import Card from "../profile/Card";
import "./header.css";
function Header() {
  const [name, setName] = useState("");
  const [attack, setAttack] = useState(35);
  const [status, setStatus] = useState("meir");
  const [data, setData] = useState(data2);
  const [dangerous, setDangerous] = useState("");
  function searchTerroristBYName() {
    const terroristName = data.filter((obj) =>
      obj.name.toLocaleLowerCase().includes(name),
    );

    return terroristName;
  }

  function searchTerroristBYAttack() {
    const terroristByAttack = data.filter((obj) => obj.attacksCount >= attack);

    return terroristByAttack;
  }
  function filterByStatus() {
    const byStatus = data.filter((obj) =>
      obj.status.toLocaleLowerCase().includes(status),
    );

    return byStatus;
  }

  function SearchDangerous() {
    const filterStatus = data.filter((obj) =>
      obj.status
        .toLocaleLowerCase()
        .includes("active")
        .filter((obj) => obj.attacksCount > 15)
        .filter((obj) => obj.imageUrl !== null),
    );
    return filterStatus;
  }

  let nameTerrorist = searchTerroristBYName();
  let attackTerrorist = searchTerroristBYAttack();
  let byStatus = filterByStatus();

  //   function clickSearch() {
  //      { display: "" };
  //   }
  //   function clickAttack() {
  //     return { display: "" }
  //   }
  //   function clickStatus() {
  //     return { display: "" }
  //   }

  return (
    <>
      <div className="header">
        <input
          className="search"
          type="text"
          placeholder="Search by name"
          onChange={(search) => setName(search.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="search by attack"
          onChange={(search) => setAttack(search.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="search by status"
          onChange={(search) => setStatus(search.target.value)}
        />
      </div>
      <div>
        <button onClick={(search) => setDangerous(search.target.value)}>
          most denatures
        </button>
      </div>
      <div className="search">
        {nameTerrorist.map((user) => {
          return (
            <Card
              name={user.name}
              organization={user.organization}
              attacksCount={user.attacksCount}
              status={user.status}
              relationToIsraelSummary={user.relationToIsraelSummary}
              imageUrl={user.imageUrl}
            ></Card>
          );
        })}
      </div>
      <div>
        {attackTerrorist.map((user) => {
          return (
            <Card
              name={user.name}
              organization={user.organization}
              attacksCount={user.attacksCount}
              status={user.status}
              relationToIsraelSummary={user.relationToIsraelSummary}
              imageUrl={user.imageUrl}
            ></Card>
          );
        })}
      </div>

      <div className="status">
        {byStatus.map((user) => {
          return (
            <Card
              name={user.name}
              organization={user.organization}
              attacksCount={user.attacksCount}
              status={user.status}
              relationToIsraelSummary={user.relationToIsraelSummary}
              imageUrl={user.imageUrl}
            ></Card>
          );
        })}
      </div>
      <div>
        {/* {dangerous.map((user) => {
          return (
            <Card
              name={user.name}
              organization={user.organization}
              attacksCount={user.attacksCount}
              status={user.status}
              relationToIsraelSummary={user.relationToIsraelSummary}
              imageUrl={user.imageUrl}
            ></Card>
          );
        })} */}
      </div>
    </>
  );
}

export default Header;
