import React from "react";
import styles from "./AwardsCard.module.css";
import PropTypes from "prop-types";
import cn from "classnames";
import Award from "../../icons/Award";

const AwardsCard = (args) => {
  const { variations } = args;

  return (
    <div
      className={cn(styles.container, {
        [styles.awardsCard]: variations === "awardsCard",
        [styles.responsiveAwardsCard]: variations === "responsiveAwardsCard",
      })}>
      <Award />
      <div className={styles.awardsTitle}>
        <p className={styles.awardsTitleHead}></p>
      </div>
    </div>
  );
};

AwardsCard.propTypes = {
  variations: PropTypes.oneOf(["awardsCard", "responsiveAwardsCard"]),
};

export default AwardsCard;
