import React, { Component } from "react";

class UserGreetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }
  render() {
    if (this.state.loggedIn) {
      return <div>Welcome Adarsh!</div>;
    } else {
      return <div>Hello Guest!</div>;
    }
  }
}

export default UserGreetings;
