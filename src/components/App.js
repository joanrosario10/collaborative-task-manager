import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "./LoginForm";
import { SignupForm } from "./LoginForm";



// import AppBar from './AppBar';
import "./AuthForm.css";

import TaskList from "../components/TaskList";
function App() {
  return (
    <Router>
      <div className="main">
        {/* <AppBar /> */}
        <input type="checkbox" id="chk" aria-hidden="true" />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/tasks" element={<TaskList />} />

          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
