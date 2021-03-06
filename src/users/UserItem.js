import React, { Component } from "react";
import "../App.css";
class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          style={{ width: "60px" }}
          className="round-image"
        ></img>
        <h3>{login}</h3>
        <a href={html_url} className="btn btn-dark btn-sm my-0">
          More
        </a>
      </div>
    );
  }
}

export default UserItem;
