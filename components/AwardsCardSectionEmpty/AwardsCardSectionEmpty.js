import styles from "./AwardsCardSectionEmpty.module.css";
import EmptyAwardsSectionSvg from "../icons/EmptyAwardSection";

const AwardsCardSectionEmpty = (args) => {
  return (
    <div className={styles.container} {...args}>
      <div className={styles.CardSectionContent}>
        <div className={styles.CardSectionSvg}>
          <EmptyAwardsSectionSvg />
        </div>
        <div className={styles.CardSectionStatement}>
          <h5>Apperently no award yet</h5>
          <p>
            Add a question to build up your pre-screening flow that is shown to
            users when they apply for a job.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AwardsCardSectionEmpty;
