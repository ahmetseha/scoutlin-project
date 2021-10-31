import { useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import { useRouter } from "next/router";

import styles from "./AccoladesPreview.module.css";
import DeleteButton from "../DeleteButton/DeleteButton";
import SquareAwardsSection from "../SquareAwardsSection/SquareAwardsSection";
import Line from "../icons/Line";
import AwardsCard from "../AwardsCard/AwardsCard";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Award from "../icons/Award";
import axios from "axios";

const AccoladesPreview = () => {
  const router = useRouter();

  const [closePreview, setClosePreview] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const biggerThan600 = useMediaPredicate("(max-width: 600px)");

  const closeThePreview = () => {
    setClosePreview(!closePreview);
    router.push("/reward");
  };

  const inputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const postInputValues = () => {
    const url = "https://enzwniipnqlq320.m.pipedream.net";
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    axios
      .post(url, { headers: { headers } }, { inputValue })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {closePreview ? (
        <div className={styles.container}>
          <div className={styles.titleAndButton}>
            <p className={styles.title}>Accolades Preview</p>
            <DeleteButton onClick={closeThePreview} />
          </div>
          <form className={styles.previewContent}>
            <div className={styles.squareAwardsSection}>
              <SquareAwardsSection />
            </div>
            <div className={styles.line}>
              <Line />
            </div>
            <div className={styles.cardAndInput}>
              {biggerThan600 ? (
                <div className={styles.responsiveCard}>
                  <Award />
                  <input placeholder="S" />
                  <span>You can add a signature to your award.</span>
                </div>
              ) : (
                <div className={styles.card}>
                  <AwardsCard variations="awardsCardWithoutDelete" />
                </div>
              )}
              <div className={styles.inputContainer}>
                {biggerThan600 && (
                  <div className={styles.inputContainer}>
                    <Input label="Write a rank" variations="BlockInput" />
                    <Input label="exp: Altın Örümcek" variations="BlockInput" />
                  </div>
                )}
                {!biggerThan600 && (
                  <div className={styles.inputContainer}>
                    <Input
                      value={inputValue}
                      onChange={inputValueChange}
                      label="Choose or ent"
                      variations="input"
                    />
                    <Input label="Example: Altın Örümcek" variations="input" />
                    <Input label="Write featured" variations="input" />
                    <Input label="S" variations="input" />
                  </div>
                )}
              </div>
            </div>
            <div className={styles.saveButton}>
              <Button
                onClick={postInputValues}
                label="Save Awards"
                variations="primary"
                size="block"
              />
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default AccoladesPreview;
