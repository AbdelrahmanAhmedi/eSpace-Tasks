import { useEffect } from "react";
import Button from "./Button";

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
  const percentage = Math.round((clicks / boxCount) * 100);

  const onHide = () => {
    setShow(false);
    setGameOver(false);
  };

  const goback = () => {
    if (showModal) return;
    router.push("/");
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
          console.log("Score saved to mock API!");
        } catch (error) {
          console.error("Error saving score:", error);
        }
      };

      ApiScore();
    }
  }, [show, gameOver]);

  const getapi = () => {
    window.open("https://68761c5a814c0dfa653ab5d2.mockapi.io/scores");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 text-center">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {percentage === 100 ? "🎉 Game Won" : "⏰ Time Expired"}
          </h2>
          <button
            onClick={onHide}
            className="text-gray-500 hover:text-gray-800 text-lg"
          >
            &times;
          </button>
        </div>

        <div className="space-y-3">
          <h4>Name: {username}</h4>
          <h5>Difficulty: {difficulty}</h5>
          <h4>Score: {percentage}%</h4>
        </div>

        <div className="mt-6 space-x-4">
          <Button
            text="View Leaderboard"
            className="btn btn-outline-primary"
            onClick={getapi}
          />
          <Button text="Close" className="btn btn-danger" onClick={onHide} />
        </div>
      </div>
    </div>
  );
};

export default Modalcomp;
