
import { useState } from "react";

function Task5() {
  const [key, setKey] = useState("");

  function handleKeyDown(event) {
    setKey(event.key);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>onKeyDown Event</h1>

      <input
        type="text"
        placeholder="Press any key"
        onKeyDown={handleKeyDown}
        style={{
          padding: "12px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid gray"
        }}
      />

      <h2>Key Pressed: {key}</h2>
    </div>
  );
}

export default Task5;
