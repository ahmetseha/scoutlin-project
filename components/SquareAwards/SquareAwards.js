import styles from "./SquareAwards.module.css";
import Award from "../icons/Award";
// import PropTypes from "prop-types";

const SquareAwards = (args) => {
  // const { variations } = args;

  return (
    <div className={styles.container} {...args}>
      <div className={styles.awardSvg}>
        <Award />
      </div>
    </div>
  );
};

// Input.propTypes = {
//   variations: PropTypes.oneOf([
//     "squareAwardsS",
//     "squareAwardsB",
//     "squareAwards3",
//   ]),
// };

export default SquareAwards;
