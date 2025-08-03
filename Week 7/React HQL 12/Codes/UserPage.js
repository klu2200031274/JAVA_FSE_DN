import React from "react";

const UserPage = () => {
  const flights = [
    { flight: "AI-101", destination: "Delhi", price: 4500 },
    { flight: "AI-202", destination: "Mumbai", price: 5500 },
    { flight: "AI-303", destination: "Bangalore", price: 5000 },
  ];

  const handleBook = (flight) => {
    alert(`Ticket booked for flight ${flight.flight} to ${flight.destination}!`);
  };

  return (
    <div>
      <h2>Available Flights (User View)</h2>
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
            <strong>{f.flight}</strong> - {f.destination} - ₹{f.price}{" "}
            <button
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                backgroundColor: "#2ecc71",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => handleBook(f)}
            >
              Book
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
