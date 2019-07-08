import React, { Component } from "react";
import { Button, Collapse, Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBarCollapse extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: true
    };
  }
  onSearchButtonClick() {}

  render() {
    const { open } = this.state;
    return (
      <div id="search_container" className="col-sm-6">
        <Collapse in={this.state.open}>
          <Form inline id="search_bar">
            <FormControl
              type="text"
              placeholder="Search for Champion"
              className=" mr-sm-2"
            />
            {/* <Button type="submit">Submit</Button> */}
          </Form>
        </Collapse>
        <Button
          onClick={() => {
            this.setState({ open: !open });
            this.onSearchButtonClick();
          }}
          aria-controls="search_bar"
          aria-expanded={open}
          className="ml-auto"
          id="search_bar_expand_button"
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </div>
    );
  }
}

export default SearchBarCollapse;
