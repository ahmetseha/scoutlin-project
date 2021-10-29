import styles from "./Accolades.module.css";
import PropTypes from "prop-types";
import Disable2 from "../icons/Disable2";

const Accolades = (args) => {
  const { head, explanation, ...props } = args;

  return (
    <div className={styles.container} {...props}>
      <div className={styles.accoladesContent}>
        <div>
          <h5 className={styles.accoladesHead}>{head}</h5>
          <p className={styles.accoladesExplanation}>{explanation}</p>
        </div>
        <div className={styles.accoladesDisableSvg}>
          <Disable2 />
        </div>
      </div>
    </div>
  );
};

Accolades.propTypes = {
  head: PropTypes.string,
  explanation: PropTypes.string,
};

export default Accolades;
