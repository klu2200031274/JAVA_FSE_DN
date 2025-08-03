import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import EmployeeList from "./Components/EmployeeList";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={styles.container}>
        <h1>Employee Management App</h1>
        <button onClick={toggleTheme} style={styles.toggleBtn}>
          Toggle Theme (Current: {theme})
        </button>
        <EmployeeList />
      </div>
    </ThemeContext.Provider>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
    marginTop: "20px",
  },
  toggleBtn: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default App;
