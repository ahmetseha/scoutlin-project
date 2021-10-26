import styles from "./CloseButton.module.css";
import Disable from "../icons/Disable";

const CloseButton = (args) => {
  return (
    <div className={styles.container} {...args}>
      <div className={styles.closeButtonContent}>
        <div className={styles.closeButtonSvg}>
          <Disable />
        </div>
        <p className={styles.closeButtonTitle}>Close</p>
      </div>
    </div>
  );
};

export default CloseButton;
