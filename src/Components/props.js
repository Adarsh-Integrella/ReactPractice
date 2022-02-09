import react from "react";

const greeting = (prop) => {
  return (
    <h1>
      Hello! {prop.name} You are great {prop.occupation}
    </h1>
  );
};
export default greeting;
