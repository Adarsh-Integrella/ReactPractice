import react, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");

  function getFormData(e) {
    e.preventDefault();
    console.warn(name, tnc, interest);
  }
  return (
    <form onSubmit={getFormData}>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <select onChange={(e) => setInterest(e.target.value)}>
        <option>Select gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <input type="checkbox" onChange={(e) => setTnc(e.target.checked)}></input>
      <span>Agree terms and conditions</span>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
