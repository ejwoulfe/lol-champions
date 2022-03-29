import React, { useEffect, useState } from "react";
import ChampionContainer from "./Champion/ChampionContainer";
import { useLocation } from "react-router-dom";
export function Champion() {

  const location = useLocation();
  const [champion, setChampion] = useState(location.state.champion)

  useEffect(() => {
    setChampion(location.state.champion)
  }, [location.state.champion])


  return (
    <div>
      <ChampionContainer champion={champion} />
    </div>
  );

}
