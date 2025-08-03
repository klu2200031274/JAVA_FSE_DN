import React, { useState } from "react";
import ListofPlayers from "./Components/ListofPlayers";
import IndianPlayers from "./Components/IndianPlayers";

function App() {
  const [flag, setFlag] = useState(true); // Toggle to show components conditionally

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>Cricket App</h1>
      <button
        onClick={() => setFlag(!flag)}
        style={{
          margin: "10px",
          padding: "8px 16px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Toggle Component
      </button>
      <hr />
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
