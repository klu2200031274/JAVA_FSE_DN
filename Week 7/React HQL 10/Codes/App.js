import React from "react";

function App() {
  // Single office object
  const office = {
    name: "Skyview Corporate Tower",
    rent: 75000,
    address: "Hitech City, Hyderabad",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
  };

  // Multiple office spaces
  const officeList = [
    {
      name: "Skyview Corporate Tower",
      rent: 75000,
      address: "Hitech City, Hyderabad",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Tech Park Plaza",
      rent: 55000,
      address: "Gachibowli, Hyderabad",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Cyber Heights",
      rent: 60000,
      address: "Financial District, Hyderabad",
      image:
        "https://images.unsplash.com/photo-1507206130118-b5907f817163?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // JSX for heading
  const heading = <h1 style={{ textAlign: "center", color: "#2c3e50" }}>Office Space Rentals</h1>;

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      {heading}

      {/* Single office example */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={office.image}
          alt={office.name}
          style={{ width: "300px", borderRadius: "10px" }}
        />
        <h2>{office.name}</h2>
        <p
          style={{
            color: office.rent < 60000 ? "red" : "green",
            fontWeight: "bold",
          }}
        >
          Rent: ₹{office.rent}
        </p>
        <p>{office.address}</p>
      </div>

      <hr />

      {/* List of offices */}
      <h2>Available Office Spaces</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {officeList.map((item, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              margin: "10px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{item.name}</h3>
            <p
              style={{
                color: item.rent < 60000 ? "red" : "green",
                fontWeight: "bold",
              }}
            >
              Rent: ₹{item.rent}
            </p>
            <p>{item.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
