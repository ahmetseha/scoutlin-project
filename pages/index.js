// import { useState } from "react";
import AwardsContainer from "../components/AwardsContainer/AwardsContainer";
import styles from "./index.module.css";
import InputSection from "../components/InputSection/InputSection";

export default function Home() {
  // const [showContainer, setShowContainer] = useState(false);

  // const getAwardsContainer = () => {
  //   setShowContainer(true);
  // };

  return (
    <div className={styles.container}>
      {/* {showContainer ? null : (
        <div className={styles.rewardButtonContainer}>
          <button className={styles.rewardButton} onClick={getAwardsContainer}>
            Reward
          </button>
        </div>
      )}
      {showContainer ? <AwardsContainer /> : null} */}
      <InputSection />
    </div>
  );
}
