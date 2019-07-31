import React from "react";
import "./champions-list.scss";
import Button from "react-bootstrap/Button";
function ChampionsList(props) {
  const listOfChampions = props.list.map(champion => (
    <Button
      variant="link"
      key={champion.id}
      id="champion_link"
      onClick={props.championClickedOn}
    >
      <div id="img_container">
        <img
          id={champion.id}
          src={
            "http://ddragon.leagueoflegends.com/cdn/9.13.1/img/champion/" +
            champion.id +
            ".png"
          }
        />

        <div id={props.list.indexOf(champion)} className="overlay" />
      </div>

      <div id="champion_name">{champion.name}</div>
    </Button>
  ));

  return <div id="champions_list">{listOfChampions}</div>;
}

export default ChampionsList;
