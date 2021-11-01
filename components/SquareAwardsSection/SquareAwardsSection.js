import { useMediaPredicate } from "react-media-hook";

import styles from "./SquareAwardsSection.module.css";
import SquareAwards from "../SquareAwards/SquareAwards";
import Left from "../icons/Left";
import Right from "../icons/Right";

const SquareAwardsSection = () => {
  // const [squareAward, setSquareAward] = useState([
  //   <SquareAwards variations="squareAwardsB" />,
  //   <SquareAwards variations="squareAwardsS" />
  //   <SquareAwards variations="squareAwards3" />
  //   <SquareAwards variations="squareAwardsB" />
  //   <SquareAwards variations="squareAwardsS" />
  // ])
  const biggerThan600 = useMediaPredicate("(max-width: 600px)");

  return (
    <div className={styles.container}>
      {!biggerThan600 && (
        <div className={styles.container}>
          <Left />
          <SquareAwards variations="squareAwardsB" />
          <SquareAwards variations="squareAwardsS" />
          <SquareAwards variations="squareAwards3" />
          <SquareAwards variations="squareAwardsB" />
          <SquareAwards variations="squareAwardsS" />
          <Right />
        </div>
      )}
      {biggerThan600 && (
        <div className={styles.container}>
          <Left />
          <SquareAwards variations="squareAwardsB" />
          <SquareAwards variations="squareAwardsS" />
          <SquareAwards variations="squareAwards3" />
          <Right />
        </div>
      )}
    </div>
  );
};

export default SquareAwardsSection;
