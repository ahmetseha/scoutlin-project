import { useMediaPredicate } from "react-media-hook";
import styles from "./AwardsCardSection.module.css";
import AwardsCard from "../AwardsCard/AwardsCard";

const AwardsCardSection = (args) => {
  // media query in jsx (react-media-hook)
  const biggerThan600 = useMediaPredicate("(max-width: 600px)");

  return (
    <div className={styles.container} {...args}>
      <div className={styles.awardsCards}>
        {biggerThan600 ? (
          <AwardsCard variations="responsiveAwardsCard" />
        ) : (
          [
            <AwardsCard variations="awardsCard" />,
            <AwardsCard variations="awardsCard" />,
            <AwardsCard variations="awardsCard" />,
          ]
        )}
      </div>
    </div>
  );
};

export default AwardsCardSection;
