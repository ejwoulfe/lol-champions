import React from "react";
import "./champions-list.scss";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";

function ChampionsList(props) {
  const listOfChampions = props.list.map(champion => (
    <Link
      variant="link"
      key={champion.id}
      id="champion_link"
      to={{
        pathname: "/champion/" + champion.name,
        state: { champion: champion }
      }}
    >
      <div id="img_container">
        <img
          id={champion.id}
          alt={champion.name}
          src={
            "http://ddragon.leagueoflegends.com/cdn/9.13.1/img/champion/" +
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
      <Row>{listOfChampions}</Row>
    </div>
  );
}

export default ChampionsList;
