import react, { Component } from "react";

class count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countNum: 0,
    };
  }
  increaseCount() {
    this.setState(
      {
        countNum: this.state.countNum + 1,
      },
      () => {
        console.log("Call back value is", this.state.countNum);
      }
    );
  }
  render() {
    return (
      <div>
        <h1>{this.state.countNum}</h1>
        <button onClick={() => this.increaseCount()}>Increase count</button>
      </div>
    );
  }
}

export default count;
