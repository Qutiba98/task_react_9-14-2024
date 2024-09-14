import React from "react";
import "../styles/ParentComponents.css";

const ChildComponents = ({ name, age, hobbies, profession, country }) => {
  return (
    <div className="ChildContainer">
      <div className="ChildHeadText">
        <h2>Child Component</h2>
      </div>
      <div className="UserDetails">
        <p>
          <strong>Name :</strong> {name}
        </p>
        <p>
          <strong>Age :</strong> {age}
        </p>
        <p>
          <strong>Profession :</strong> {profession}
        </p>
        <p>
          <strong>Country :</strong> {country}
        </p>
      </div>
      <div className="Hobbies">
        <p>
          <strong>Hobbies :</strong>
        </p>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChildComponents;
