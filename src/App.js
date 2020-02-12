import React, { Component } from "react";
import Navbar from "./components/layouts/Navbar";
import axios from "axios";
import Users from "./users/Users";
import Spinner from "./components/layouts/Spinner";
import Search from "./users/Search";
class App extends Component {
  state = {
    users: [],
    loading: false
  };
  // async componentDidMount() {
  //   // console.log(REACT_APP_GITHUB_CLIENT_ID);
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id= ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_id=${process.env.REACT_APP_GITHUB_SECRET_ID}`
  //   );
  //   await new Promise((resolve, reject) => setTimeout(resolve, 500));
  //   this.setState({
  //     users: res.data,
  //     loading: false
  //   });
  // }
  searchUser = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id= ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`
    );
    this.setState({ loading: true });
    await new Promise((resolve, reject) => setTimeout(resolve, 500));
    this.setState({
      users: res.data.items,
      loading: false
    });
  };
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Search searchUser={this.searchUser}></Search>
        {this.state.loading && <Spinner></Spinner>}
        <div className="container">
          <Users users={this.state.users} loading={this.state.loading}></Users>
        </div>
      </div>
    );
  }
}

export default App;
