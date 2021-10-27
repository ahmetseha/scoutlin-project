import { useState } from "react";
import styles from "./AwardsContainer.module.css";
import CloseButton from "../CloseButton/CloseButton";
import Accolades from "../Accolades/Accolades";
import AwardsCardSection from "../AwardsCardSection/AwardsCardSection";
import AwardsCardSectionEmpty from "../AwardsCardSectionEmpty/AwardsCardSectionEmpty";
import Button from "../Button/Button";

const AwardsContainer = () => {
  const [showContainer, setShowContainer] = useState(true);

  const closeTheContainer = () => {
    setShowContainer(false);
  };

  // const getAwards = () => {
  //   console.log("naber");
  // };

  return (
    <div>
      {showContainer && (
        <div className={styles.container}>
          <div className={styles.awardsHead}>
            <CloseButton onClick={closeTheContainer} />
            <Accolades />
          </div>
          <AwardsCardSection />
          <div className={styles.buttonGroup}>
            <Button variations="secondary" size="md" label="Exit" />
            <Button variations="primary" size="md" label="New Award" />
          </div>
        </div>
      )}
    </div>
  );
};

export default AwardsContainer;
