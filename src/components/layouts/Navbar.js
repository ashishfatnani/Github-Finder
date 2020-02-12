import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          {/* eslint-disable-next-line */}
          <a className="navbar-brand" href="#">
            <i className="github icon"></i>
            <b>Github</b>
          </a>
        </nav>
        <br></br>
      </div>
    );
  }
}

export default Navbar;
