import { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./Input.module.css";

const Input = (args) => {
  const { variations, label, valueLength, ...props } = args;

  return (
    <div
      className={cn(styles.container, {
        [styles.input]: variations === "input",
        [styles.BlockInput]: variations === "BlockInput",
      })}
      {...args}>
      <input maxLength="15" placeholder={label} valueLength />
      <div className={styles.inputValue} {...args}>
        <span className={styles.value}>{valueLength}</span>/15
      </div>
    </div>
  );
};

Input.propTypes = {
  variations: PropTypes.oneOf(["input", "blockInput"]),
  label: PropTypes.string,
  valueLength: PropTypes.number,
};

export default Input;
