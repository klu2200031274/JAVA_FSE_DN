import React, { useState } from "react";
import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={styles.container}>
      <h1>Ticket Booking App</h1>

      {/* Conditional Rendering */}
      {isLoggedIn ? (
        <>
          <UserPage />
          <button onClick={handleLogout} style={styles.button}>
            Logout
          </button>
        </>
      ) : (
        <>
          <GuestPage />
          <button onClick={handleLogin} style={styles.button}>
            Login
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
    marginTop: "20px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default App;
