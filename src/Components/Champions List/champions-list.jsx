import React from "react";
import "./champions-list.scss";
import { Link } from "react-router-dom";

function ChampionsList(props) {
  const listOfChampions = props.list.map(champion => (
    <Link
      key={champion.id}
      id="champion_link"
      to={"/champion/" + champion.name}
      state={{ champion: champion }}
    >
      <div id="img_container">
        <img
          id={champion.id}
          alt={champion.name}
          src={
            "https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/" +
            champion.id +
            ".png"
          }
        />

        <div id={props.list.indexOf(champion)} className="overlay" />
      </div>

      <div id="champion_name">{champion.name}</div>
    </Link>
  ));

  return (
    <div id="champions_list">
      {listOfChampions}
    </div>
  );
}

export default ChampionsList;
