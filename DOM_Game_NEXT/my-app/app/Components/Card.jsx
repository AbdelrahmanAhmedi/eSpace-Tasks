import React, { useRef, useEffect } from "react";

const gradients = [
  "bg-primary bg-gradient",
  "bg-secondary bg-gradient",
  "bg-success bg-gradient",
  "bg-danger bg-gradient",
  "bg-warning bg-gradient",
  "bg-info bg-gradient",
];

function Card({ onClickfn, reset, style }) {
  const cardRef = useRef();
  const clicked = useRef(false);

  const handleClick = () => {
    if (clicked.current) return;
    const randomClass = gradients[Math.floor(Math.random() * gradients.length)];
    cardRef.current.className = `click t border border-primary shadow-lg ${randomClass}`;
    clicked.current = true;

    onClickfn();
  };

  useEffect(() => {
    if (reset) {
      cardRef.current.className = "click t border border-primary shadow-lg";
      clicked.current = false;
    }
  }, [reset]);

  return (
    <div
      ref={cardRef}
      className="click t border border-primary shadow-lg"
      style={{
        height: "200px",
        cursor: "pointer",
        ...style,
      }}
      onClick={handleClick}
    >
      {/* //{ for (var i=0 ; i < arr.length ; i++ )
    //        {<div className="col-12 col-md-6">
    //           <div></div>
    //         </div>}} */}
    </div>
  );
}

export default React.memo(Card);
