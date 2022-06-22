import { FcGoogle } from "react-icons/fc";
const ButtonAlt = ({ text, style, onclick }) => {
  return (
    <button style={style} className="account-button" onClick={onclick}>
      {style.border ? <FcGoogle /> : ""}
      {text}
    </button>
  );
};
export default ButtonAlt;
