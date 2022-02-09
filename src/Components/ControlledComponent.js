import React, { useState } from "react";

function ControlledComponent() {
  const [data, setData] = useState(0);
  return (
    <div>
      <h1>ControlledComponent</h1>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      ></input>
    </div>
  );
}

export default ControlledComponent;
