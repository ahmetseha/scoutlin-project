import { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./Input.module.css";

const Input = (args) => {
  const { variations, label, ...props } = args;
  const [inputValue, setinputValue] = useState(0);

  const inputValueLength = (e) => {
    setinputValue(e.target.value.length);
  };

  return (
    <div
      className={cn(styles.container, {
        [styles.input]: variations === "input",
        [styles.BlockInput]: variations === "BlockInput",
      })}
      {...args}>
      <input
        maxLength="15"
        placeholder={label}
        onChange={inputValueLength}
        {...props}
      />
      <div className={styles.inputValue}>
        <span className={styles.value}>{inputValue}</span>/15
      </div>
    </div>
  );
};

Input.propTypes = {
  variations: PropTypes.oneOf(["input", "BlockInput"]),
  label: PropTypes.string,
};

export default Input;
