import React, { Component } from "react";
import { Button, Collapse, Form, FormControl } from "react-bootstrap";
class SearchBarCollapse extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }
  a;
  render() {
    const { open } = this.state;
    return (
      <>
        <Button
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="ml-auto"
          id="search_bar_expand_button"
        >
          <span class="glyphicon glyphicon-search" />
        </Button>
        <Collapse in={this.state.open}>
          <Form inline id="example-collapse-text">
            <FormControl
              type="text"
              placeholder="Search for Champion"
              className=" mr-sm-2"
            />
            {/* <Button type="submit">Submit</Button> */}
          </Form>
        </Collapse>
      </>
    );
  }
}

export default SearchBarCollapse;
