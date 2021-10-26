import CloseButton from "../components/CloseButton/CloseButton";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <CloseButton />
    </div>
  );
}
