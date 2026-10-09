
import { useState } from "react";

function Task1() {
  const [message, setMessage] = useState("Hello");

  function handleClick() {
    if (message === "Hello") {
      setMessage("Welcome to React");
    } else {
      setMessage("Hello");
    }
  }

  return (
    <div>
      <h1>{message}</h1>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default Task1;
