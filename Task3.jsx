
import { useState } from "react";

function Task3() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() !== "") {
      setMessage("Submitted Successfully!");
    } else {
      setMessage("Please enter your name!");
    }
  }

  return (
    <div>
      <h1>onSubmit Event</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {message && <h2>{message}</h2>}
    </div>
  );
}

export default Task3;
