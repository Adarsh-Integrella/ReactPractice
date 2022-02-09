import react from "react";

function printList() {
  const list = ["Bruce", "Superman", "Ironman"];
  return (
    <div>
      {list.map((x) => (
        <h2> {x}</h2>
      ))}
    </div>
  );
}

export default printList;
