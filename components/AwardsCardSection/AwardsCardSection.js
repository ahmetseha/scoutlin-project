// import EmptyAwardsSectionSvg from "../icons/EmptyAwardSection";
import styles from "./AwardsCardSection.module.css";
import AwardsCard from "../AwardsCard/AwardsCard";

const AwardsCardSection = (args) => {
  return (
    <div className={styles.container} {...args}>
      <div className={styles.awardsCards}>
        <AwardsCard variations="awardsCard" />
      </div>
    </div>
  );
};

export default AwardsCardSection;
