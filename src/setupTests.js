// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";

function App() {
  const [users, setUsers] = useState([
    { username: "john", password: "123" }
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={users} />} />
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

<>
    <div className="container">

      <Header />
      <div className="process">
        
        <TodoContainer />
      </div>

    </div>
  </>