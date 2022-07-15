import { Link } from "react-router-dom";
import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">
      <nav style = {{
        borderBottom: " solid 1px",
        paddingBottom: "1rem",
      }}
      >
    {/* Links to my navbar */}
        <Link to="/learn">Learn</Link> |{" "}
        <Link to="/connect">Connect</Link>

      </nav>
   </div>
  );
}

export default App;
