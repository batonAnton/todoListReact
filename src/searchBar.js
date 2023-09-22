import React, { Component } from "react";
import Input from "react-input-autosize";

class SearchBar extends Component {
  state = {
    value: ""
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <Input
        type="text"
        placeholder="Пошук"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;