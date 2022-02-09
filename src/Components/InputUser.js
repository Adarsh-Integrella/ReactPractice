import react, { useState } from "react";

function InputUser() {
  const [data, setData] = useState("Start typing...");
  function printFun(val) {
    setData(val.target.value);
  }
  return (
    <div>
      <h1> {data}</h1>
      <input type="text" onChange={printFun}></input>
    </div>
  );
}
export default InputUser;
