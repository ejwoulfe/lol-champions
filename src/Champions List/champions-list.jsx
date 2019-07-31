import React from "react";

function ChampionsList(props) {
  const listOfChampions = props.list.map(champion => (
    <a href="#" key={champion.id}>
      {champion.name}
      <img
        src={
          "http://ddragon.leagueoflegends.com/cdn/9.13.1/img/champion/" +
          champion.id +
          ".png"
        }
      />
    </a>
  ));

  return <div id="champions_list">{listOfChampions}</div>;
}

export default ChampionsList;
