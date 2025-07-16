import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "./components/cards";
import Button from "./components/button";
import Modal from "./components/modalcomp";
import Progress from "./components/progress";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [reset, setReset] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [cardstyle, setCardStyle] = useState("");
  const [boxCount, setBoxCount] = useState(6);
  const [timeLeft, setTimeLeft] = useState(0.1);
  const [gameOver, setGameOver] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const location = useLocation();
  const username = location.state?.username;
  const difficulty = location.state?.difficulty;

  const navigate = useNavigate();
  const goback = () => navigate("/");

  const handleClick = useCallback(() => {
    setClicks((prev) => prev + 1);
  }, []);

  const handleReset = useCallback(() => {
    setClicks(0);
    setReset((prev) => prev + 1);
    if (difficulty === "Hard") {
      setTimeLeft(10);
    } else if (difficulty === "Medium") {
      setTimeLeft(20);
    } else if (difficulty === "Easy") {
      setTimeLeft(30);
    }
  }, [difficulty]);

  useEffect(() => {
    if (difficulty === "Hard") {
      setBoxCount(21);
      setCardStyle({ height: "40px" });
      setTimeLeft(10);
    } else if (difficulty === "Medium") {
      setBoxCount(15);
      setCardStyle({ height: "65px" });
      setTimeLeft(20);
    } else if (difficulty === "Easy") {
      setBoxCount(9);
      setCardStyle({ height: "100px" });
      setTimeLeft(30);
    }
  }, [difficulty]);

  useEffect(() => {
    if (timeLeft <= 0 || clicks === boxCount) {
      setGameOver(true);
      setShowModal(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, clicks, boxCount]);

  return (
    <div
      className={`d-flex flex-column ${
        theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <div className="p-2 d-flex justify-content-between align-items-center">
        <Button text="🔙 Go Back" className="btn btn-danger" onClick={goback} />
        <Button
          onClick={toggleTheme}
          className="btn btn-secondary"
          text={theme === "dark" ? " Light Mode" : " Dark Mode"}
        />
      </div>

      <div className="container flex-grow-1">
        <h1 className="text-center mb-4">
          Welcome {username} — Difficulty: {difficulty}
        </h1>

        <div className="row justify-content-center g-3 mb-4">
          <h4 className="text-center">Timeleft : 0:{timeLeft}</h4>
          {Array.from({ length: boxCount }, (_, i) => (
            <div className="col-12 col-sm-6 col-lg-4" key={i}>
              <Card onClickfn={handleClick} reset={reset} style={cardstyle} />
            </div>
          ))}
        </div>

        <div className="d-flex flex-column align-items-center mb-4">
          <div className="d-flex align-items-center gap-3 mb-3">
            <span className="fw-bold">Number of clicks: {clicks}</span>
            <Button
              text="Reset"
              className="btn btn-danger"
              onClick={handleReset}
            />
          </div>

          <Progress
            click={clicks}
            className="border border-success"
            style={{ width: "60vw", maxWidth: "500px" }}
            boxCount={boxCount}
          />
        </div>

        <Modal
          show={showModal}
          setShow={setShowModal}
          clicks={clicks}
          boxCount={boxCount}
          gameOver={gameOver}
          username={username}
          difficulty={difficulty}
          setGameOver={setGameOver}
        />
      </div>
    </div>
  );
}
