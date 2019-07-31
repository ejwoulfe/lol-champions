import React from "react";
import "./champions-list.scss";

function ChampionsList(props) {
  const listOfChampions = props.list.map(champion => (
    <a href="#" key={champion.id} id="champion_link">
      <div id="img_container">
        <img
          src={
            "http://ddragon.leagueoflegends.com/cdn/9.13.1/img/champion/" +
            champion.id +
            ".png"
          }
        />
        <div className="overlay" />
      </div>

      <div id="champion_name">{champion.name}</div>
    </a>
  ));

  return <div id="champions_list">{listOfChampions}</div>;
}

export default ChampionsList;
