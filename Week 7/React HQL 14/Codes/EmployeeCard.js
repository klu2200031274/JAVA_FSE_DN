import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

const EmployeeCard = ({ employee }) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: theme === "light" ? "#f9f9f9" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h3>{employee.name}</h3>
      <p>{employee.role}</p>
      <button
        style={{
          ...styles.button,
          backgroundColor: theme === "light" ? "#3498db" : "#2ecc71",
        }}
      >
        View Profile
      </button>
    </div>
  );
};

const styles = {
  card: {
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "200px",
  },
  button: {
    marginTop: "10px",
    padding: "8px 16px",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
  },
};

export default EmployeeCard;
