import React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
function RouterExample() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home hai yeh bhai!</h1>
      <p>Ha bhai sach me home he hai! verify kr le bale.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>Are mere bhare me jan kr kya karoge!</h1>
      <p>Ja ab aur koi kaam kr le</p>
    </div>
  );
}
export default RouterExample;
