import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/form";
import { ThemeContext } from "../ThemeContext";

export default function HomePage() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleStart = (username, difficulty) => {
    navigate("/app", { state: { username, difficulty } });
  };

  return (
    <div
      className={`min-vh-100 p-4 ${
        theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <Form setUsername={setUsername} onSubmit={handleStart} />
    </div>
  );
}
