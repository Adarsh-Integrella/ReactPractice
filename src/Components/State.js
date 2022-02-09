import react, { useState } from "react";

function State() {
  let [data, setData] = useState(0);
  function changeName() {
    setData(data + 1);
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={changeName}> Click to change</button>
    </div>
  );
}

export default State;
