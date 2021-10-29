import styles from "./MobileHeader.module.css";
import Menu from "../icons/Menu";
import Header from "../icons/Header";
import Notification from "../icons/Notification";
import Search from "../icons/Search";

const MobileHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menuAndHeader}>
        <div className={styles.menu}>
          <Menu />
        </div>
        <div className={styles.header}>
          <Header />
        </div>
      </div>
      <div className={styles.notAndSearch}>
        <div className={styles.notification}>
          <Notification />
        </div>
        <div className={styles.earch}>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
