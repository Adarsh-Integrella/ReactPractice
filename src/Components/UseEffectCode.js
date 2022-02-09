import react, { useState } from "react";

function UseEffectCode() {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(0);
  react.useEffect(() => {
    console.log("Increase data useEffect!");
  }, [data]);
  react.useEffect(() => {
    console.log("Increase count useEffect!");
  }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Data: {data}</h1>
      <button onClick={() => setData(data + 1)}>Increase data</button>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
  );
}
export default UseEffectCode;
