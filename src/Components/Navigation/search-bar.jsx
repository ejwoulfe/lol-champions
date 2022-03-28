import React, { Component } from "react";
import { Form, FormControl, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      matchingChampionsFound: []
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      document.getElementById("search_suggestions").style.display = "none";
    } else {
      document.getElementById("search_suggestions").style.display = "block";
    }
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  keyUp = e => {
    if ((e.keyCode > 64 && e.keyCode < 91) || e.keyCode === 13) {
      const letter = document.getElementById("search_bar_input").value;
      let word = letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();

      this.setState({
        searchTerm: word
      });
      let tempArray = [];
      this.props.list.forEach(function (championObject) {
        let championName = championObject.id;
        if (championName.match(word) !== null) {
          tempArray.push(championObject);
        }
      });
      this.setState({
        matchingChampionsFound: tempArray
      });
    }
  };
  listItemClickedOn() {
    let listItem = document.getElementById("search_suggestions");
    if (listItem.style.display === "none") {
      listItem.style.display = "block";
    } else {
      listItem.style.display = "none";
    }
  }

  render() {
    const listItems = this.state.matchingChampionsFound.map(champion => (
      <li key={champion.id} onClick={this.listItemClickedOn}>
        <Link
          key={champion.id + "list_item"}
          to={"/champion/" + champion.name}
          state={{ champion: champion }}
        >
          <img
            src={
              "http://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/" +
              champion.id +
              ".png"
            }
            alt={champion.name}
          />{" "}
          {champion.name}
        </Link>
      </li>
    ));
    let width = {
      flex: 1
    };
    let border = {
      border: 0
    };

    return (
      <Col md={6} id="search_container" ref={this.setWrapperRef}>
        <Form
          inline
          style={width}
          id="bar_and_icon"
          onSubmit={this.handleSubmit}
        >
          <FormControl
            autoComplete="off"
            type="text"
            placeholder="Search for a Champion"
            className="mr-sm-2"
            style={(width, border)}
            id="search_bar_input"
            onKeyUp={this.keyUp}
          />
          <FontAwesomeIcon id="search_icon" icon={faSearch} />
          {/* <Button variant="outline-success">Search</Button> */}
          <div id="search_suggestions">
            <ul>{listItems}</ul>
          </div>
        </Form>
      </Col>
    );
  }
}
export default SearchBar;
