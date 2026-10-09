
function Task4() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>onMouseOver Event</h1>

      <div
        onMouseOver={(event) => {
          event.currentTarget.innerText = "Welcome to React!";
        }}
        onMouseOut={(event) => {
          event.currentTarget.innerText = "Move Mouse Here";
        }}
        style={{
          backgroundColor: "#052e68",
          color: "Black",
          padding: "40px",
          width: "250px",
          margin: "auto",
          borderRadius: "12px",
          cursor: "pointer",
          fontSize: "20px"
        }}
      >
        Move Mouse Here
      </div>
    </div>
  );
}

export default Task4;
