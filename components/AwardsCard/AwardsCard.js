import PropTypes from "prop-types";
import cn from "classnames";
import Link from "next/link";

// import { useAppContext } from "../../context";
import styles from "./AwardsCard.module.css";
import Award from "../icons/Award";
import TrashDelete from "../icons/TrashDelete";

const AwardsCard = (args) => {
  const { variations, featured, rank, reward, id, ...props } = args;
  // const { removeAwardsCard } = useAppContext();

  return (
    <div
      className={cn(styles.container, {
        [styles.awardsCard]: variations === "awardsCard",
        [styles.responsiveAwardsCard]: variations === "responsiveAwardsCard",
        [styles.awardsCardWithoutDelete]:
          variations === "awardsCardWithoutDelete",
      })}
      {...props}>
      <div className={styles.trashDeleteIcon}>
        <TrashDelete />
      </div>
      <Link id={id} href={`/reward/${id}`}>
        <div
          id={id}
          href={`/reward/${id}`}
          className={styles.awardsCardContent}>
          <div className={styles.awardIcon}>
            <Award />
          </div>
          <div className={styles.awardsTitle}>
            <h5 className={styles.awardsTitleFeature}>{featured}</h5>
            <p className={styles.awardTitleRating}>{rank}</p>
            <h5 className={styles.awardsTitleCompetiton}>{reward}</h5>
          </div>
        </div>
      </Link>
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
