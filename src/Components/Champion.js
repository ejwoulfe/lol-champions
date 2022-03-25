import React, { useState } from "react";
import ChampionContainer from "./Champion/ChampionContainer";
import { useLocation } from "react-router-dom";
export function Champion() {

  const location = useLocation();
  const [champion] = useState(location.state.champion)


  return (
    <div>
      <ChampionContainer champion={champion} />
    </div>
  );

}
