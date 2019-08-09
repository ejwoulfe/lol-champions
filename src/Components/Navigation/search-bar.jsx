import React, { Component } from "react";
import { Form, FormControl, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends Component {
  searchButtonClicked() {
    console.log("Clicked.");
  }
  componentDidMount() {
    let string = "Aatrox";
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/9.10.1/data/en_US/championFull.json"
    )
      .then(result => result.json())
      .then(result => {
        if (result.data.hasOwnProperty(string)) {
          console.log("found");
          console.log(eval("result.data." + string));
        }
      });
  }
  render() {
    let width = {
      flex: 1
    };
    let border = {
      border: 0
    };

    return (
      <Col md={6} id="search_container">
        <Form inline style={width} id="bar_and_icon">
          <FormControl
            type="text"
            placeholder="Search for a Champion"
            className="mr-sm-2"
            style={(width, border)}
            id="search_bar_input"
          />
          <FontAwesomeIcon
            id="search_icon"
            icon={faSearch}
            onClick={this.searchButtonClicked}
          />
          {/* <Button variant="outline-success">Search</Button> */}
        </Form>
      </Col>
    );
  }
}
export default SearchBar;
