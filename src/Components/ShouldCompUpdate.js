import react from "react";

class ShouldCompUpdate extends react.Component {
  constructor() {
    super();
    console.log("Constructor called!!");
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate() {
    console.log("Component did mount!!!!!");
    return true;
  }
  render() {
    console.log("Render");
    return (
      <div>
        <h1>component Did Mount {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click to change name
        </button>
      </div>
    );
  }
}
export default ShouldCompUpdate;
