const Button = ({ text, onclick }) => {
  return (
    <button className="create-account" onClick={onclick}>
      {text}
    </button>
  );
};

export default Button;
