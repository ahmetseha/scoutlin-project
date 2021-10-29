import { useMediaPredicate } from "react-media-hook";

import styles from "./SquareAwardsSection.module.css";
import SquareAwards from "../SquareAwards/SquareAwards";
import Left from "../icons/Left";
import Right from "../icons/Right";

const SquareAwardsSection = () => {
  const biggerThan600 = useMediaPredicate("(max-width: 600px)");

  return (
    <div className={styles.container}>
      {!biggerThan600 && (
        <div className={styles.container}>
          <Left />
          <SquareAwards />
          <SquareAwards />
          <SquareAwards />
          <SquareAwards />
          <SquareAwards />
          <Right />
        </div>
      )}
      {biggerThan600 && (
        <div className={styles.container}>
          <Left />
          <SquareAwards />
          <SquareAwards />
          <SquareAwards />
          <Right />
        </div>
      )}
    </div>
  );
};

export default SquareAwardsSection;
