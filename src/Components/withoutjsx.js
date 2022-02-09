import react from "react";
import { render } from "react-dom";

const hello = () => {
  return react.createElement(
    "div",
    { id: "jsx" },
    react.createElement("h1", { className: "jsx class" }, "JSX demo")
  );
};

export default hello;
