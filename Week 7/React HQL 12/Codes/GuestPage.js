import React from "react";

const GuestPage = () => {
  const flights = [
    { flight: "AI-101", destination: "Delhi", price: 4500 },
    { flight: "AI-202", destination: "Mumbai", price: 5500 },
    { flight: "AI-303", destination: "Bangalore", price: 5000 },
  ];

  return (
    <div>
      <h2>Available Flights (Guest View)</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {flights.map((f, index) => (
          <li
            key={index}
            style={{
              margin: "10px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <strong>{f.flight}</strong> - {f.destination} - ₹{f.price}
          </li>
        ))}
      </ul>
      <p style={{ color: "red" }}>
        Login to book tickets!
      </p>
    </div>
  );
};

export default GuestPage;
