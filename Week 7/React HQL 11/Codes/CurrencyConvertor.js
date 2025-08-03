import React, { useState } from "react";

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rupees || parseFloat(rupees) <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    const converted = (parseFloat(rupees) / 90).toFixed(2);
    setEuro(converted);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount in INR"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Convert</button>
      </form>

      {euro !== null && (
        <p style={{ marginTop: "10px", fontSize: "18px" }}>
          <strong>Euro:</strong> €{euro}
        </p>
      )}
    </div>
  );
};

const styles = {
  button: {
    margin: "10px",
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#2ecc71",
    color: "#fff",
  },
  input: {
    padding: "8px",
    fontSize: "14px",
    width: "200px",
  },
};

export default CurrencyConvertor;
