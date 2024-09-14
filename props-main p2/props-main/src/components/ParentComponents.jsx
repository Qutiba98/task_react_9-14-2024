import React, { useState } from "react";
import ChildComponents from "./ChildComponents";
import "../styles/ParentComponents.css";
const ParentComponents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const showNextPersonDetails = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };
  const showPrevPerson = () => {
    setCurrentIndex((prevIndex) => {

      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return Data.length - 1;
      }
      
    });
  };
//arrey of oop
  const Data = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      hobbies: ["Reading", "Cooking", "Gardening"],
      profession: "Engineer",
      country: "USA",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      hobbies: ["Dancing", "Drawing", "Hiking"],
      profession: "Designer",
      country: "Canada",
    },
    {
      id: 3,
      name: "Mike Johnson",
      age: 35,
      hobbies: ["Swimming", "Cycling", "Photography"],
      profession: "Photographer",
      country: "UK",
    },
  ];

  return (
    <div className="Container">
      <div className="HeadText">
        <h1>Parent Component</h1>
      </div>
      <div className="ChildComp">

        <ChildComponents
          name={Data[currentIndex].name}
          age={Data[currentIndex].age}
          hobbies={Data[currentIndex].hobbies}
          profession={Data[currentIndex].profession}
          country={Data[currentIndex].country}
        />

      </div>
      <div className="Buttons">
        {" "}
        <button
          onClick={showNextPersonDetails}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Show Next
        </button>
        <button
          onClick={showPrevPerson}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Show Prev
        </button>
      </div>
    </div>
  );
};

export default ParentComponents;
