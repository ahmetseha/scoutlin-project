import { useRouter } from "next/router";

import styles from "./index.module.css";
import Button from "../components/Button/Button";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.indexButton}>
      <Button
        variations="primary"
        size="md"
        label="Reward"
        onClick={() => router.push("/reward")}
      />
    </div>
  );
}
