import styles from "./SquareAwards.module.css";
import Award from "../icons/Award";

const SquareAwards = (args) => {
  return (
    <div className={styles.container} {...args}>
      <div className={styles.awardSvg}>
        <Award />
      </div>
    </div>
  );
};

export default SquareAwards;
