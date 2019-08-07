import React, { Component } from "react";
import Popover from "react-bootstrap/Popover";

class AbilityPreview extends Component {
  createCostsList(array) {
    return array.map((item, index) => (
      <React.Fragment key={index}>
        <li key={index}>{item}</li>
        {this.createSlash(array, index)}
      </React.Fragment>
    ));
  }
  createSlash(arr, index) {
    if (index === arr.length - 1) {
    } else {
      return <li id={"slash" + index}>/</li>;
    }
  }
  createCostsListUlt(array) {
    return array.map((item, index) => (
      <React.Fragment key={index}>
        <li key={index}>{item}</li>
        {this.createSlash(array, index)}
      </React.Fragment>
    ));
  }

  render() {
    if (this.props.type === "passive") {
      return (
        <Popover {...this.props} placement="bottom">
          <h4>{this.props.spellinfo.name}</h4>
          <p>{this.props.spellinfo.description}</p>
        </Popover>
      );
    } else {
      return (
        <Popover {...this.props} placement="bottom">
          <h4>{this.props.spellinfo.name}</h4>
          <p>{this.props.spellinfo.description}</p>
          <h5>Costs:</h5>
          {/* Need to loop for costs and cooldowns. Passive is 0, ult is 3, core is 5.*/}
          <ul>
            {this.createCostsList(this.props.spellinfo.cost)}
            <li> - Mana</li>
          </ul>
          <h5>Cooldowns:</h5>
          <ul>
            {this.createCostsList(this.props.spellinfo.cooldown)}
            <li> - Seconds</li>
          </ul>
          <p>Range: {this.props.spellinfo.range[0]}</p>
        </Popover>
      );
    }
  }
}

export default AbilityPreview;
