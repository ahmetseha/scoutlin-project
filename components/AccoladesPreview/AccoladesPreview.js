import { useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import { useRouter } from "next/router";

import { useAppContext } from "../../context";
import styles from "./AccoladesPreview.module.css";
import DeleteButton from "../DeleteButton/DeleteButton";
import SquareAwardsSection from "../SquareAwardsSection/SquareAwardsSection";
import Line from "../icons/Line";
import AwardsCard from "../AwardsCard/AwardsCard";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Award from "../icons/Award";

const AccoladesPreview = () => {
  const router = useRouter();

  const {
    setShow,
    inputValue,
    setInputValue,
    featuredValue,
    setFeaturedValue,
    rankValue,
    setRankValue,
    rewardValue,
    setRewardValue,
    postInputValues,
  } = useAppContext();

  const [closePreview, setClosePreview] = useState(true);

  const biggerThan600 = useMediaPredicate("(max-width: 600px)");

  const closeThePreview = () => {
    setShow(false);
    setClosePreview(false);
    router.push("/reward");
  };

  return (
    <>
      {closePreview ? (
        <div className={styles.container}>
          <div className={styles.titleAndButton}>
            <p className={styles.title}>Accolades Preview</p>
            <DeleteButton onClick={closeThePreview} />
          </div>
          <div className={styles.previewContent}>
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
                  <AwardsCard
                    featured={featuredValue}
                    rank={rankValue}
                    reward={rewardValue}
                    awardCardSvg
                    variations="awardsCardWithoutDelete"
                  />
                </div>
              )}
              <form className={styles.inputContainer}>
                {biggerThan600 && (
                  <div className={styles.inputContainer}>
                    <Input
                      value={rankValue}
                      onChange={(e) => setRankValue(e.target.value)}
                      label="Write a rank"
                      variations="BlockInput"
                      valueLength={rankValue.length}
                    />
                    <Input
                      value={rewardValue}
                      onChange={(e) => setRewardValue(e.target.value)}
                      label="exp: Altın Örümcek"
                      variations="BlockInput"
                      valueLength={rewardValue.length}
                    />
                  </div>
                )}
                {!biggerThan600 && (
                  <div className={styles.inputContainer}>
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      label="Choose or ent"
                      variations="input"
                      valueLength={inputValue.length}
                    />
                    <Input
                      value={rewardValue}
                      onChange={(e) => setRewardValue(e.target.value)}
                      label="Example: Altın Örümcek"
                      variations="input"
                      valueLength={rewardValue.length}
                    />
                    <Input
                      value={featuredValue}
                      onChange={(e) => setFeaturedValue(e.target.value)}
                      label="Write featured"
                      variations="input"
                      valueLength={featuredValue.length}
                    />
                    <Input
                      value={rankValue}
                      onChange={(e) => setRankValue(e.target.value)}
                      label="S"
                      variations="input"
                      valueLength={rankValue.length}
                    />
                  </div>
                )}
              </form>
            </div>
            <div className={styles.saveButton}>
              <Button
                onClick={postInputValues}
                label="Save Awards"
                variations="primary"
                size="block"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AccoladesPreview;
