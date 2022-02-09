import react, { useState } from "react";

function HideAndShow() {
  const [status, setStatus] = useState(false);
  return (
    <div>
      {status ? <h1>Hello bouy!</h1> : null}
      {/* <button onClick={() => setStatus(true)}> Show </button>
      <button onClick={() => setStatus(false)}> Hide </button> */}
      <button onClick={() => setStatus(!status)}> Toggle</button>
    </div>
  );
}
export default HideAndShow;
