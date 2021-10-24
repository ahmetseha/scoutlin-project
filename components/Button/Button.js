import PropTypes from "prop-types";
import "./Button.css";

function Button({ label, handleClick }) {
  return (
    <button className="buttonContainer" onClick={handleClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
};

export default Button;
