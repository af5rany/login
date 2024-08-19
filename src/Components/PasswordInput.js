import React, { useState } from "react";

function PasswordInput() {
  const [password, setPassword] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(null);

  const desiredPassword = "123"; // Replace with the desired password

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (password === desiredPassword) {
      setIsSuccessful(true);
    } else {
      setIsSuccessful(false);
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "400px",
        margin: "50px auto",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "20px",
          fontWeight: "600",
        }}
      >
        Enter the Desired Password
      </h2>
      <label
        htmlFor="password"
        style={{
          display: "block",
          marginBottom: "10px",
          fontWeight: "bold",
          color: "#555",
          fontSize: "16px",
        }}
      >
        Password:
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ddd",
          fontSize: "16px",
          boxSizing: "border-box",
          outline: "none",
          transition: "border-color 0.3s",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#007bff")}
        onBlur={(e) => (e.target.style.borderColor = "#ddd")}
      />
      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007bff",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background-color 0.3s",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Submit
      </button>

      {isSuccessful !== null && (
        <span
          style={{
            display: "block",
            marginTop: "20px",
            textAlign: "center",
            fontSize: "16px",
            color: isSuccessful ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {isSuccessful ? "Logged in successfully!" : "Login not successful!"}
        </span>
      )}
    </div>
  );
}

export default PasswordInput;
