import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function RoutingBestPractices() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Hello this is homepage.</h1>
      <p>This is paragraph for the home page. I hope you liked it.</p>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is about me paragraph.</p>
    </div>
  );
}
function PageNotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
}
export default RoutingBestPractices;
