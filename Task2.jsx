

import { useState } from "react";

function Task2() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <h1>onChange Event</h1>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
      />

      <h2>Hello, {name}</h2>
    </div>
  );
}

export default Task2;
