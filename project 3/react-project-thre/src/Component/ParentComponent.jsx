

import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const name = "John";
  const age = 25;
  const hobbies = ["Reading", "Cycling", "Traveling"];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h1>Parent Component</h1>
      <ChildComponent 
        name={name} 
        age={age} 
        hobbies={hobbies} 
      />
    </div>
  );
};

export default ParentComponent;

