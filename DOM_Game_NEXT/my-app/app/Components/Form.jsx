import { useFormik } from "formik";
import * as yup from "yup";
import Button from "./Button";
import React, { useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const schema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
});

const Form = ({ setUsername, onSubmit }) => {
  const [difficulty, setDifficulty] = useState("Medium");
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      setUsername(values.username);
      onSubmit(values.username, difficulty);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="m-0">Enter your Name</h2>
          <Button
            text={darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            className="btn btn-secondary mb-3"
            onClick={toggleTheme}
          />
        </div>
        <input
          type="text"
          name="username"
          className="form-control bg-light border border-success text-dark"
          placeholder="Enter your username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username && (
          <p className="text-danger">{formik.errors.username}</p>
        )}
      </div>

      <h3 className="m-3 text-center">Difficulty</h3>
      <div className="container-fluid d-flex justify-content-center gap-4 mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            onChange={() => setDifficulty("Easy")}
            style={{ backgroundColor: "#b2f2bb" }}
          />
          <label className="form-check-label">Easy</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            defaultChecked
            onChange={() => setDifficulty("Medium")}
            style={{ backgroundColor: "#fff3bf" }}
          />
          <label className="form-check-label">Medium</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            style={{ backgroundColor: "#ffc9c9" }}
            onChange={() => setDifficulty("Hard")}
          />
          <label className="form-check-label">Hard</label>
        </div>
      </div>

      <div className="text-center">
        {formik.isValid && !formik.isSubmitting && (
          <Button
            text="Start Game"
            className="btn btn-success"
            onClick={formik.handleSubmit}
          />
        )}
      </div>
    </form>
  );
};

export default Form;
