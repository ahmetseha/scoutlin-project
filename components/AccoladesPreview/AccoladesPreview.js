import { useState } from "react";

import styles from "./AccoladesPreview.module.css";
import DeleteButton from "../DeleteButton/DeleteButton";
import SquareAwardsSection from "../SquareAwardsSection/SquareAwardsSection";
import Line from "../icons/Line";
import AwardsCard from "../AwardsCard/AwardsCard";
import InputSection from "../InputSection/InputSection";
import Button from "../Button/Button";

const AccoladesPreview = () => {
  const [closePreview, setClosePreview] = useState(true);

  const closeThePreview = () => setClosePreview(false);

  return (
    <>
      {closePreview ? (
        <div className={styles.container}>
          <div className={styles.titleAndButton}>
            <p className={styles.title}>Accolades Preview</p>
            <DeleteButton onClick={closeThePreview} />
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
                <AwardsCard variations="awardsCardWithoutDelete" />
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
      ) : null}
    </>
  );
};

export default AccoladesPreview;
