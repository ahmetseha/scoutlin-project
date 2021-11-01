import styles from "./SquareAwards.module.css";
import Award from "../icons/Award";
import Award1 from "../icons/Award1";
import Award2 from "../icons/Award2";
import PropTypes from "prop-types";

const SquareAwards = (args) => {
  const { variations } = args;

  return (
    <div className={styles.container} {...args}>
      <div className={styles.awardSvg}>
        {variations === "squareAvardS" ? (
          <Award />
        ) : variations === "squareAwardsB" ? (
          <Award1 />
        ) : (
          <Award2 />
        )}
      </div>
    </div>
  );
};

SquareAwards.propTypes = {
  variations: PropTypes.oneOf([
    "squareAwardsS",
    "squareAwardsB",
    "squareAwards3",
  ]),
};

export default SquareAwards;
