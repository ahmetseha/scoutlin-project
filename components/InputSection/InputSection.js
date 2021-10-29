import { useMediaPredicate } from "react-media-hook";

import styles from "./InputSection.module.css";
import Input from "../Input/Input";

const InputSection = () => {
  const biggerThan600 = useMediaPredicate("(max-width: 600px)");

  return (
    <div className={styles.container}>
      {
        (biggerThan600 ? (
          <Input label="Write a rank" variations="BlockInput" />
        ) : (
          <Input label="Write featured" variations="input" />
        ),
        (<Input label="S" variations="input" />))
      }
    </div>
  );
};

export default InputSection;
