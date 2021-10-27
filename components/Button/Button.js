import styles from "./Button.module.css";
import PropTypes from "prop-types";
import cn from "classnames";

const Button = (args) => {
  const { label, variations, size, ...props } = args;

  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: variations === "primary",
        [styles.secondary]: variations === "secondary",
        [styles.mdButton]: size === "md",
        [styles.blockButton]: size === "block",
      })}
      {...props}>
      <span>{label}</span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  variations: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["md", "block"]),
  handleClick: PropTypes.func,
};

export default Button;
