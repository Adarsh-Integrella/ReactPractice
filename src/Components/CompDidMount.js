import react from "react";

class CompDidMount extends react.Component {
  constructor() {
    super();
    console.log("Constructor called!!");
    this.state = {
      name: "Adarsh",
    };
  }
  componentDidMount() {
    console.log("Component did mount!!!!!");
  }
  render() {
    console.log("Render");
    return (
      <div>
        <h1>component Did Mount</h1>
        <button
          onClick={() => {
            this.setState({ name: "Adarsh kumar Maheshwari" });
          }}
        >
          Click to change name
        </button>
      </div>
    );
  }
}
export default CompDidMount;
