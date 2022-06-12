import React, { Component } from "react";
import FreeChampionsSlider from "../Free Champions Components/free-champions-slider";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FreeChampions extends Component {
  constructor() {
    super();
    this.state = {
      freeChampionIds: [],
      freeChampionsList: [],
      isLoading: false
    };
    this._isMounted = false;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  componentWillMount() {
    if (sessionStorage.hasOwnProperty("freeChampionsList")) {
      this._isMounted && this.setState({ isLoading: false });
      sessionStorage.getItem("freeChampionsList") &&
        this.setState({
          freeChampionsList: JSON.parse(
            sessionStorage.getItem("freeChampionsList")
          )
        });
    }
  }
  componentDidMount() {
    this._isMounted = true;

    if (!sessionStorage.getItem("freeChampionsList")) {
      this.setState({ isLoading: true });

      Promise.all([
        fetch(
          "https://3agpr8hwd1.execute-api.us-east-2.amazonaws.com/" + process.env.REACT_APP_STAGE_NAME + "/free-champions?", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET,OPTIONS",
            "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token, X-Riot-Token, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers',
            "X-Riot-Token": process.env.REACT_APP_API_KEY
          }
        }
        ),

        fetch(

          "https://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/championFull.json"
        )
      ])
        .then(([res1, res2]) => {
          return Promise.all([res1.json(), res2.json()]);
        })
        .then(([result1, result2]) => {
          this._isMounted &&
            this.setState({
              freeChampionIds: result1.freeChampionIds
            });

          let tempArr = [...this.state.freeChampionIds];

          for (var champion in result2.data) {
            let championObject = result2.data[champion];

            let currentKey = Number(championObject.key);
            let keyIndex = tempArr.indexOf(currentKey);

            if (tempArr.includes(currentKey)) {
              this._isMounted &&
                this.setState({
                  freeChampionsList: [
                    ...this.state.freeChampionsList,
                    championObject
                  ]
                });

              tempArr.splice(keyIndex, 1);
            }

            if (tempArr.length === 0) {
              break;
            }
          }
          this._isMounted && this.setState({ isLoading: false });
          sessionStorage.setItem(
            "freeChampionsList",
            JSON.stringify(this.state.freeChampionsList)
          );
        });
    }
  }

  render() {
    const isLoading = this.state.isLoading;
    if (isLoading) {
      return (
        <div id="loading_container">
          <FontAwesomeIcon
            style={{ color: "#bdf2ef" }}
            id="loading_spinner"
            icon={faSpinner}
            spin
          />
          <h4>Retrieving Data</h4>
        </div>
      );
    }
    return (
      <div id="free_champions_container">
        <FreeChampionsSlider data={this.state.freeChampionsList} />
      </div>
    );
  }
}

export default FreeChampions;
