import React, { useRef } from "react";

function RefFunctional() {
  let inputRef = useRef(null);
  function handleInput() {
    console.log(inputRef.current.value);
  }
  return (
    <div>
      <h1>Ref Functionals.</h1>
      <input type="text" ref={inputRef}></input>
      <button onClick={() => handleInput()}>Handle input</button>
    </div>
  );
}

export default RefFunctional;
