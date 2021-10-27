import styles from "./Input.module.css";
// import PropTypes from "prop-types";

const Input = (args) => {
  return (
    <div className={styles.container} {...args}>
      <input />
      <div className={styles.inputValue}>
        <span className={styles.value}>13</span>/15
      </div>
    </div>
  );
};

// Input.propTypes = {
//   variations: PropTypes.oneOf(["input", "inputBlock"]),
// };

export default Input;
