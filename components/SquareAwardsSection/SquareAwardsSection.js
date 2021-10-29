import styles from "./SquareAwardsSection.module.css";
import SquareAwards from "../SquareAwards/SquareAwards";
import Left from "../icons/Left";
import Right from "../icons/Right";

const SquareAwardsSection = () => {
  return (
    <div className={styles.container}>
      <Left />
      <SquareAwards />
      <SquareAwards />
      <SquareAwards />
      <Right />
    </div>
  );
};

export default SquareAwardsSection;
