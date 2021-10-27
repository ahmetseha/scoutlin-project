import styles from "./Accolades.module.css";
import PropTypes from "prop-types";

const Accolades = (args) => {
  const { head, explanation, ...props } = args;

  return (
    <div className={styles.container} {...props}>
      <div>
        <h5>{head}</h5>
        <p>{explanation}</p>
      </div>
    </div>
  );
};

Accolades.propTypes = {
  option: PropTypes.oneOf(["accoladesContent", "accoladesAboutCreathive"]),
};

export default Accolades;
