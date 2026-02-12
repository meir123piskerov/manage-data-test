import React, { useState } from "react";
import data2 from "../../data/data.json";
import Card from "../profile/Card";
import "./header.css";
import Cards from "../card/Cards";
function Header() {
  const [name, setName] = useState("");
  const [attack, setAttack] = useState(0);
  const [status, setStatus] = useState("");
  const [data, setData] = useState([...data2]);

  function SearchDangerous() {
    // const filterStatus = data.filter((obj) =>
    //   obj.status
    //     .toLocaleLowerCase()
    //     .includes("active")
    //     .filter((obj) => obj.attacksCount > 15)
    //     .filter((obj) => obj.imageUrl !== null),
    // );
    const mostDangerous = data2
      .filter((t) => t.imageUrl && t.status === "active")
      .sort((a, b) => b.attacksCount - a.attacksCount)[0];

    setData([mostDangerous]);
  }

  return (
    <>
      <div className="header">
        <input
          className="search"
          type="text"
          placeholder="Search by name"
          value={name}
          onChange={(search) => {
            setName(search.target.value);
            setData(
              data2.filter((obj) => obj.name.includes(search.target.value)),
            );
          }}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="search by attack"
          value={attack}
          onChange={(search) => {
            setAttack(search.target.value);
            setData(
              data2.filter(
                (obj) => obj.attacksCount === Number(search.target.value),
              ),
            );
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="search by status"
          value={status}
          onChange={(search) => {
            setStatus(search.target.value);
            setData(
              data2.filter((obj) =>
                obj.status.toLocaleLowerCase().includes(search.target.value),
              ),
            );
          }}
        />
      </div>
      <div>
        <button onClick={SearchDangerous}>most denatures</button>
      </div>

      <Cards data={data} />
      <div></div>
    </>
  );
}

export default Header;
