import AwardsContainer from "../components/AwardsContainer/AwardsContainer";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <AwardsContainer />
    </div>
  );
}
