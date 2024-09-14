
import React from "react";
const ChildComponent = ({ name, age, hobbies = [] }) => {
  const containerStyle = {
    border: "2px solid #4CAF50",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#e8f5e9",
    color: "#2e7d32",
    maxWidth: "400px",
    margin: "0 auto",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
  };

  const listItemStyle = {
    padding: "10px",
    borderBottom: "1px solid #ccc",
  };

  return (
    <div style={containerStyle}>
      <h2>Child Component</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>

      <ul style={listStyle}>
        {hobbies.map((hobby, index) => (
          <li key={index} style={listItemStyle}>
            {hobby}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;
