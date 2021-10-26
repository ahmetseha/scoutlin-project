import styles from "./AwardsContainer.module.css";
import CloseButton from "../CloseButton/CloseButton";
import Accolades from "../Accolades/Accolades";
import AwardsCardSection from "../AwardsCardSection/AwardsCardSection";
import Button from "../Button/Button";

const AwardsContainer = () => {
  const getAwards = () => {
    console.log("naber");
  };

  return (
    <div className={styles.container}>
      <div className={styles.awardsHead}>
        <CloseButton />
        <Accolades />
      </div>
      <AwardsCardSection />
      <div className={styles.buttonGroup}>
        <Button variations="secondary" size="md" label="Exit" />
        <Button
          onClick={getAwards}
          variations="primary"
          size="md"
          label="New Award"
        />
      </div>
    </div>
  );
};

export default AwardsContainer;
