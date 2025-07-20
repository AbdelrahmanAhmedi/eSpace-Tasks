const Button = ({ text, className, onClick }) => {
  return (
    <h5 onClick={onClick} className={className} style={{ cursor: "pointer" }}>
      {text}
    </h5>
  );
};

export default Button;
