import styles from "./InputSection.module.css";
import Input from "../Input/Input";

const InputSection = () => {
  return (
    <div className={styles.container}>
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  );
};

export default InputSection;
