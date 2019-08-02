import React, { Component } from "react";
import { Form, FormControl, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends Component {
  render() {
    let width = {
      flex: 1
    };
    let border = {
      border: 0
    };

    return (
      <Col md={6} id="search_container" className="col-xs-4">
        <Form inline style={width} id="bar_and_icon">
          <FormControl
            type="text"
            placeholder="Search for a Champion"
            className="mr-sm-2"
            style={(width, border)}
            id="search_bar_input"
          />
          <FontAwesomeIcon id="search_icon" icon={faSearch} />
          {/* <Button variant="outline-success">Search</Button> */}
        </Form>
      </Col>
    );
  }
}
export default SearchBar;
