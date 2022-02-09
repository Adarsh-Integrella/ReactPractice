import React, { useState } from "react";

function HighOrderComponent() {
  return (
    <div>
      <h1>HighOrderComponent</h1>
      <HOCBlue cmp={Counter} />
    </div>
  );
}
function HOCBlue(props) {
  return (
    <h3
      style={{
        backgroundColor: "Blue",
        width: "60px",
        color: "white",
        borderRadius: "10px",
      }}
    >
      <props.cmp />
    </h3>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
  );
}
export default HighOrderComponent;
