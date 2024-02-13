import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState();
  const [age, setAge] =useState(23);
  const[isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("spongebob");
  };


  const incrementAge = () =>{
        setAge(age +2)
  }

  const toggleEmployedStatus= () =>{
    setIsEmployed(!isEmployed);
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Status</button>
      <p></p>

    </div>
  );
}

export default MyComponent;
