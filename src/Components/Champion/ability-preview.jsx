import React, { Component } from "react";
import Popover from "react-bootstrap/Popover";

class AbilityPreview extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <Popover {...this.props} placement="bottom">
        <h4>{this.props.spellinfo.name}</h4>
        <h5>{this.props.spellinfo.description}</h5>
        <h5>Costs:</h5>
        {/* Need to loop for costs and cooldowns. Passive is 0, ult is 3, core is 5.*/}
        <ul>
          <li>{this.props.spellinfo.cost[0]}</li>
          <li>{this.props.spellinfo.cost[1]}</li>
          <li>{this.props.spellinfo.cost[2]}</li>
          <li>{this.props.spellinfo.cost[3]}</li>
          <li>{this.props.spellinfo.cost[4]}</li>
        </ul>
        <h5>Cooldowns:</h5>
        <ul>
          <li>{this.props.spellinfo.cooldown[0]}</li>
          <li>{this.props.spellinfo.cooldown[1]}</li>
          <li>{this.props.spellinfo.cooldown[2]}</li>
          <li>{this.props.spellinfo.cooldown[3]}</li>
          <li>{this.props.spellinfo.cooldown[4]}</li>
        </ul>
        <p>Range: {this.props.spellinfo.range[0]}</p>
      </Popover>
    );
  }
}

export default AbilityPreview;
