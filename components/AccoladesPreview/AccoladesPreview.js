import { useState } from "react";
import { useMediaPredicate } from "react-media-hook";

import styles from "./AccoladesPreview.module.css";
import DeleteButton from "../DeleteButton/DeleteButton";
import SquareAwardsSection from "../SquareAwardsSection/SquareAwardsSection";
import Line from "../icons/Line";
import AwardsCard from "../AwardsCard/AwardsCard";
import InputSection from "../InputSection/InputSection";
import Button from "../Button/Button";
import Award from "../icons/Award";

const AccoladesPreview = () => {
  const [closePreview, setClosePreview] = useState(true);
  const biggerThan600 = useMediaPredicate("(max-width: 600px)");

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
              {biggerThan600 ? (
                <div className={styles.responsiveCard}>
                  <Award />
                  <input placeholder="S" />
                  <span>You can add a signature to your award.</span>
                </div>
              ) : (
                <div className={styles.card}>
                  <AwardsCard variations="awardsCardWithoutDelete" />
                </div>
              )}
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
