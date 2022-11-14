import './App.scss';
import React from "react";
import NavBar from './components/navbar/NavBar';
import Router from "./routers/index";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <Router />
      </div>
    </React.Fragment>
  );
}

export default App
