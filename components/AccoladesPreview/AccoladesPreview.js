import styles from "./AccoladesPreview.module.css";
import DeleteButton from "../DeleteButton/DeleteButton";
import SquareAwardsSection from "../SquareAwardsSection/SquareAwardsSection";
import Line from "../icons/Line";
import AwardsCard from "../AwardsCard/AwardsCard";
import InputSection from "../InputSection/InputSection";
import Button from "../Button/Button";

const AccoladesPreview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleAndButton}>
        <p className={styles.title}>Accolades Preview</p>
        <DeleteButton />
      </div>
      <div className={styles.previewContent}>
        <div className={styles.squareAwardsSection}>
          <SquareAwardsSection />
        </div>
        <div className={styles.line}>
          <Line />
        </div>
        <div className={styles.cardAndInput}>
          <div className={styles.card}>
            <AwardsCard />
          </div>
          <div className={styles.inputSection}>
            <InputSection />
          </div>
        </div>
        <div className={styles.saveButton}>
          <Button label="Save Awards" variations="primary" size="block" />
        </div>
      </div>
    </div>
  );
};

export default AccoladesPreview;
