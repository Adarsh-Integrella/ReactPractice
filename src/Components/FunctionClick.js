import React from "react";

function FunctionClick() {
  const functionClicked = () => {
    console.log("Function clicked");
  };
  return (
    <div>
      <button onClick={functionClicked}> Click</button>
    </div>
  );
}

export default FunctionClick;
