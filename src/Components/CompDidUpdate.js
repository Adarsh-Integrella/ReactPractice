import react from "react";

class CompDidUpdate extends react.Component {
  constructor() {
    super();
    console.log("Constructor called!!");
    this.state = {
      count: 0,
    };
  }
  componentDidUpdate(preProps, preState, snapshot) {
    console.log("Component did update!!!!!", preState.count, this.state.count);
  }
  render() {
    console.log("Render");
    return (
      <div>
        <h1>component Did Mount</h1>
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          increase
        </button>
      </div>
    );
  }
}
export default CompDidUpdate;
