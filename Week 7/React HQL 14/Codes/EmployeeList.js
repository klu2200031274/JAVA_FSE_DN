import React from "react";
import EmployeeCard from "./EmployeeCard";

const employees = [
  { id: 1, name: "John Doe", role: "Software Engineer" },
  { id: 2, name: "Jane Smith", role: "UI/UX Designer" },
  { id: 3, name: "David Brown", role: "Project Manager" },
];

const EmployeeList = () => {
  return (
    <div style={styles.list}>
      <h2>Employees</h2>
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};

const styles = {
  list: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
};

export default EmployeeList;
