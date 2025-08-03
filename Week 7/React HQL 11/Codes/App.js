import React, { useState } from "react";
import CurrencyConvertor from "./Components/CurrencyConvertor";

const App = () => {
  const [count, setCount] = useState(0);

  // Increment with message
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    alert("Hello! This is a static message after increment.");
  };

  // Decrement
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  // Welcome message
  const sayWelcome = () => {
    alert("Welcome to React Events!");
  };

  // Synthetic event
  const handleSyntheticEvent = (e) => {
    e.preventDefault();
    alert("I was clicked (Synthetic Event)!");
  };

  return (
    <div style={styles.container}>
      <h1>React Event Handling Examples</h1>
      <h2>Counter Value: {count}</h2>

      <div style={styles.section}>
        <button onClick={handleIncrement} style={styles.button}>
          Increment
        </button>
        <button onClick={handleDecrement} style={styles.button}>
          Decrement
        </button>
      </div>

      <div style={styles.section}>
        <button onClick={sayWelcome} style={styles.button}>
          Say Welcome
        </button>
      </div>

      <div style={styles.section}>
        <button onClick={handleSyntheticEvent} style={styles.button}>
          OnPress (Synthetic Event)
        </button>
      </div>

      <CurrencyConvertor />
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "30px",
    fontFamily: "Arial",
  },
  section: {
    margin: "20px 0",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#3498db",
    color: "#fff",
  },
};

export default App;
