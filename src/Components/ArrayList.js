import react from "react";
import { Table } from "react-bootstrap";

function ArrayList() {
  //   const names = ["Adarsh", "Anil", "Rajeshwar", "Bill", "Mukesh"];
  const names = [
    { name: "Adarsh", email: "danichaadarsh73@gmail.com", contact: 123 },
    { name: "Anil", email: "Anil@gmail.com", contact: 1324 },
    { name: "Rajeshwar", email: "Rajeshwar@gmail.com", contact: 433 },
    { name: "Mukesh", email: "Mukesh@gmail.com", contact: 989 },
  ];

  return (
    <div>
      <h1>Handle Array with list</h1>
      <Table>
        <tbody>
          {names.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default ArrayList;
