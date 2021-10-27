import styles from "./DeleteButton.module.css";
import TrashDelete from "../icons/TrashDelete";

const DeleteButton = (args) => {
  return (
    <button className={styles.container} {...args}>
      <div className={styles.trashDeleteSvg}>
        <TrashDelete />
      </div>
      <div className={styles.text}>Delete</div>
    </button>
  );
};

export default DeleteButton;
