import styles from "./Accolades.module.css";
import cn from "classnames";

const Accolades = () => {
  return (
    <div className={styles.container}>
      <div className={(cn(styles.accolades), {})}>
        <h5>Accolades</h5>
        <p>Determine how much minimum wage you work.</p>
      </div>
    </div>
  );
};

export default Accolades;
