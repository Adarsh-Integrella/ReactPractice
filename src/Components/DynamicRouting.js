import React from "react";
import Users from "./Users";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
function DynamicRouting() {
  const users = [
    { id: 1, name: "Adarsh", email: "danichaadarsh73@gmail.com" },
    { id: 2, name: "Ramesh", email: "Ramesh@gmail.com" },
    { id: 3, name: "Suresh", email: "Paresh@gmail.com" },
    { id: 4, name: "Paresh", email: "Suresh@gmail.com" },
  ];
  return (
    <div>
      <BrowserRouter>
        <h1>Dynamic Routing</h1>
        {users.map((items) => (
          <div>
            <Link to={"/user/" + items.id}>
              <h3>{items.name}</h3>
            </Link>
          </div>
        ))}
        <Routes>
          <Route path="/user/:id" element={<Users />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default DynamicRouting;
