import React, { useState } from "react";
import styles from "./AwardsCard.module.css";
import PropTypes from "prop-types";
import cn from "classnames";
import Award from "../icons/Award";
import TrashDelete from "../icons/TrashDelete";

const AwardsCard = (args) => {
  const { variations } = args;
  const [removeCard, setRemoveCard] = useState([]);

  const removeAwardsCard = (id) => {
    setRemoveCard((removeCard) => removeCard.filter((q) => q.id !== id));
  };

  return (
    <div
      className={cn(styles.container, {
        [styles.awardsCard]: variations === "awardsCard",
        [styles.responsiveAwardsCard]: variations === "responsiveAwardsCard",
        [styles.awardsCardWithoutDelete]:
          variations === "awardsCardWithoutDelete",
      })}
      {...args}>
      <div className={styles.trashDeleteIcon} onClick={removeAwardsCard}>
        <TrashDelete />
      </div>
      <div className={styles.awardsCardContent}>
        <div className={styles.awardIcon}>
          <Award />
        </div>
        <div className={styles.awardsTitle}>
          <h5 className={styles.awardsTitleFeature}>FEATURED</h5>
          <p className={styles.awardTitleRating}>Silver</p>
          <h5 className={styles.awardsTitleCompetiton}>Kristal Elma</h5>
        </div>
      </div>
    </div>
  );
};

AwardsCard.propTypes = {
  variations: PropTypes.oneOf([
    "awardsCard",
    "responsiveAwardsCard",
    "awardsCardWithoutDelete",
  ]),
};

export default AwardsCard;
