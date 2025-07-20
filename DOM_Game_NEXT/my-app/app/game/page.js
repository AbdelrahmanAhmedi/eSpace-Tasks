"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Card from "../Components/Card";
import Button from "../components/Button";
import Modal from "../components/ModalComp";
import Progress from "../components/Progress";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [reset, setReset] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [cardstyle, setCardStyle] = useState("");
  const [boxCount, setBoxCount] = useState(6);
  const [timeLeft, setTimeLeft] = useState(2);
  const [gameOver, setGameOver] = useState(false);

  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const router = useRouter();
  const searchParams = useSearchParams();
  const username = searchParams.get("username");
  const difficulty = searchParams.get("difficulty");

  const goback = () => router.push("/");

  const handleClick = useCallback(() => {
    setClicks((prev) => prev + 1);
  }, []);

  const handleReset = useCallback(() => {
    setClicks(0);
    setReset((prev) => prev + 1);
    setGameOver(false);
    setShowModal(false);

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
    if (gameOver || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameOver(true);
          setShowModal(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameOver, timeLeft]);

  useEffect(() => {
    if (clicks === boxCount && !gameOver) {
      setGameOver(true);
      setShowModal(true);
    }
  }, [clicks, boxCount, gameOver]);

  return (
    <div className="d-flex flex-column min-vh-100 ">
      <div className="p-2 d-flex justify-content-between align-items-center">
        <Button text="🔙 Go Back" className="btn btn-danger" onClick={goback} />
        <Button
          text={darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          className="btn btn-secondary"
          onClick={toggleTheme}
        />
      </div>

      <div className="container flex-grow-1">
        <h1 className="text-center mb-4">
          Welcome {username} — Difficulty: {difficulty}
        </h1>

        <div className="row justify-content-center g-3 mb-4">
          <h4 className="text-center">Time left: 0:{timeLeft}</h4>
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
