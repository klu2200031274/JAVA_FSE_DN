import React from "react";
import ComplaintRegister from "./Components/ComplaintRegister";

function App() {
  return (
    <div style={styles.container}>
      <h1>Ticket Raising App</h1>
      <ComplaintRegister />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
    marginTop: "20px",
  },
};

export default App;
