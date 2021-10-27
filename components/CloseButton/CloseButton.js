import styles from "./CloseButton.module.css";
import Disable from "../icons/Disable";

const CloseButton = (args) => {
  return (
    <div className={styles.container}>
      <div className={styles.closeButton}>
        <div className={styles.closeButtonContent} {...args}>
          <div className={styles.closeButtonSvg}>
            <Disable />
          </div>
          <div className={styles.title}>
            <p className={styles.closeButtonTitle}>Close</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloseButton;
