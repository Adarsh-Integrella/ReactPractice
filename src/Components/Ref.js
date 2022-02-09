import react, { createRef } from "react";

class Ref extends react.Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }
  componentDidMount() {}
  getVal() {
    console.log(this.inputRef.current.value);
    this.inputRef.current.style.backgroundColor = "red";
    this.inputRef.current.style.color = "white";
  }
  render() {
    return (
      <div>
        <h1>Ref</h1>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={() => this.getVal()}>Get val</button>
      </div>
    );
  }
}
export default Ref;
