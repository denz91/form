import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Home from "./pages/Home";
import Login from "./pages/Login";
function App() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              email={name}
              pass={pass}
              nameset={setName}
              passset={setPass}
            />
          }
        />
        <Route path="/Home" element={<Home name={name} pass={pass} />} />
      </Routes>
    </Router>
  );
}

export default App;
