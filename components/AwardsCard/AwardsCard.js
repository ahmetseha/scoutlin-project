import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./AwardsCard.module.css";
import Award from "../icons/Award";
import TrashDelete from "../icons/TrashDelete";

const AwardsCard = (args) => {
  const { variations, featured, rank, reward, ...props } = args;
  const [removeCard, setRemoveCard] = useState([]);

  const removeAwardsCard = (id) => {
    setRemoveCard(() => removeCard.filter((q) => q.id !== id));
  };
  return (
    <div
      className={cn(styles.container, {
        [styles.awardsCard]: variations === "awardsCard",
        [styles.responsiveAwardsCard]: variations === "responsiveAwardsCard",
        [styles.awardsCardWithoutDelete]:
          variations === "awardsCardWithoutDelete",
      })}
      {...props}>
      <div className={styles.trashDeleteIcon} onClick={removeAwardsCard}>
        <TrashDelete />
      </div>
      <div className={styles.awardsCardContent}>
        <div className={styles.awardIcon}>
          <Award />
        </div>
        <div className={styles.awardsTitle}>
          <h5 className={styles.awardsTitleFeature}>{featured}</h5>
          <p className={styles.awardTitleRating}>{rank}</p>
          <h5 className={styles.awardsTitleCompetiton}>{reward}</h5>
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
  featured: PropTypes.string,
  rank: PropTypes.string,
  reward: PropTypes.string,
};

AwardsCard.defaultProps = {
  featured: "FEATURED",
  rank: "Silver",
  reward: "Kristal Elma",
};

export default AwardsCard;
