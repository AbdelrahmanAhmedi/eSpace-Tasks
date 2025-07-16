import { Modal } from "react-bootstrap";
import Button from "./button";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Modalcomp = ({
  gameOver,
  show,
  setShow,
  clicks,
  boxCount,
  username,
  difficulty,
  setGameOver,
}) => {
  const { width, height } = useWindowSize();
  const percentage = Math.round((clicks / boxCount) * 100);

  const onHide = () => {
    setShow(false);
    setGameOver(false);
  };

  useEffect(() => {
    if (show && gameOver) {
      const ApiScore = async () => {
        try {
          await fetch("https://68761c5a814c0dfa653ab5d2.mockapi.io/scores", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: username,
              score: percentage,
              username,
              difficulty,
            }),
          });
          console.log(" Score saved to mock API!");
        } catch (error) {
          console.error(" Error saving score:", error);
        }
      };

      ApiScore();
    }
  }, [show, gameOver]);

  const getapi = () => {
    window.open("https://68761c5a814c0dfa653ab5d2.mockapi.io/scores");
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          {percentage === 100 ? "🎉 Game Won" : "⏰ Time Expired"}
          {percentage === 100 && <Confetti width={width} height={height} />}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-center">
        <h4>Name: {username}</h4>
        <h5>Difficulty: {difficulty}</h5>
        <h4>Score: {percentage}%</h4>

        <Button
          text="View Leaderboard"
          className="btn btn-outline-primary mt-3"
          onClick={getapi}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button text="Close" className="btn btn-danger" onClick={onHide} />
      </Modal.Footer>
    </Modal>
  );
};

export default Modalcomp;
