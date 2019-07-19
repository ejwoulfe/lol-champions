import React, { Component } from "react";
import ByTier from "./by-tier-ranked-emblems";
import CurrentRankSlider from "./current-rank-slider";
import Iron from "../../Assets/Ranked Icons/Emblem_Iron.png";
import Bronze from "../../Assets/Ranked Icons/Emblem_Bronze.png";
import Silver from "../../Assets/Ranked Icons/Emblem_Silver.png";
import Gold from "../../Assets/Ranked Icons/Emblem_Gold.png";
import Platinum from "../../Assets/Ranked Icons/Emblem_Platinum.png";
import Diamond from "../../Assets/Ranked Icons/Emblem_Diamond.png";
import Master from "../../Assets/Ranked Icons/Emblem_Master.png";
import Grandmaster from "../../Assets/Ranked Icons/Emblem_Grandmaster.png";
import Challenger from "../../Assets/Ranked Icons/Emblem_Challenger.png";
class ByTierContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: true,
      tierClickedOn: "None",

      lowTiers: [
        { name: "Iron", image: Iron, style: { color: "#A9A5A4" } },
        { name: "Bronze", image: Bronze, style: { color: "#7A4E38" } },
        { name: "Silver", image: Silver, style: { color: "#99AFB4" } }
      ],
      midTiers: [
        { name: "Gold", image: Gold, style: { color: "#FCE18D" } },
        { name: "Platinum", image: Platinum, style: { color: "#8AB1AF" } },
        { name: "Diamond", image: Diamond, style: { color: "#7685C5" } }
      ],
      highTiers: [
        { name: "Master", image: Master, style: { color: "#9C71BE" } },
        {
          name: "Grandmaster",
          image: Grandmaster,
          style: { color: "#BA7E85" }
        },
        { name: "Challenger", image: Challenger, style: { color: "#FFFFE5" } }
      ]

      // lowTiers: ["Iron", "Bronze", "Silver"],
      // midTiers: ["Gold", "Platinum", "Diamond"],
      // highTiers: ["Master", "Grandmaster", "Challenger"],
      // lowTierImages: [Iron, Bronze, Silver],
      // lowTierImages: [Gold, Platinum, Diamond],
      // lowTierImages: [Master, Grandmaster, Challenger]
    };
    this.handleTransition = this.handleTransition.bind(this);
  }

  handleTransition(e) {
   
    this.setState({ isShowing: !this.state.isShowing });
    this.setState({ tierClickedOn: e.currentTarget.id });
  }

  render() {
    if (this.state.isShowing) {
      return (
        <ByTier
          handleTransition={this.handleTransition}
          lowTiers={this.state.lowTiers}
          midTiers={this.state.midTiers}
          highTiers={this.state.highTiers}
        />
      );
    } else {
      return (
        <CurrentRankSlider
          tier={this.state.tierClickedOn}
          handleTransition={this.handleTransition}
        />
      );
    }
  }
}

export default ByTierContainer;
