import React, { Component } from "react";

class Search extends Component {
  state = {
    text: ""
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.searchUser(this.state.text);
    this.setState({
      text: ""
    });
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form className="form mb-5" onSubmit={this.handleOnSubmit}>
          <div className="ui input">
            <input
              className="inverted"
              type="text"
              name="text"
              placeholder="Search..."
              onChange={this.handleChange}
            />
            <button
              type="submit"
              value="Search"
              className="ui secondary  button ml-2"
            >
              Search
            </button>
            <br></br>
          </div>
        </form>
        <button
          className="ui button"
          value="clear"
          type="clear"
          onClick={this.handleClear}
          style={{ marginTop: "auto" }}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default Search;
