import { useState } from "react";
import { useRouter } from "next/router";
import { useMediaPredicate } from "react-media-hook";
import uniqid from "uniqid";

import { useAppContext } from "../../context";
import styles from "./AwardsContainer.module.css";
import CloseButton from "../CloseButton/CloseButton";
import Accolades from "../Accolades/Accolades";
import AwardsCard from "../AwardsCard/AwardsCard";
import AwardsCardSectionEmpty from "../AwardsCardSectionEmpty/AwardsCardSectionEmpty";
import Button from "../Button/Button";
import MobileHeader from "../MobileHeader/MobileHeader";
import AccoladesPreview from "../AccoladesPreview/AccoladesPreview";

const AwardsContainer = () => {
  const { show, setShow, card, setCard, postInputValues } = useAppContext();
  const router = useRouter();

  const [showAwardsCardSection, setShowAwardsCardSection] = useState(false);
  // media query in jsx (react-media-hook)
  const biggerThan600 = useMediaPredicate("(max-width: 600px)");

  const showAccolades = () => {
    setShow(!show);
  };
  const saveAndExit = async () => {
    await postInputValues();
    setShow(false);
    router.push("/");
  };
  const routerBack = () => {
    setShow(false);
    router.push("/");
  };
  const newAward = () => {
    setShowAwardsCardSection(true);
    const id = uniqid();
    setCard((card) => [...card, { id: id }]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.awardsHead}>
        <div className={styles.mobileHeader}>
          <MobileHeader />
        </div>
        <CloseButton onClick={routerBack} />
        <div className={styles.accolades}>
          {biggerThan600 ? (
            <Accolades
              head="About Creathive"
              explanation="Write a description about your agency."
            />
          ) : (
            <Accolades
              head="Accolades"
              explanation="Determine how much minimum wage you work."
            />
          )}
        </div>
      </div>

      {show && (
        <div className={styles.accoladesPreview}>
          <AccoladesPreview />
        </div>
      )}

      {!showAwardsCardSection ? (
        <AwardsCardSectionEmpty />
      ) : (
        <div className={styles.awardsCardsContainer}>
          {card.slice(0, 3).map((card, id) => {
            return (
              <div key={id} className={styles.awardsCards}>
                <AwardsCard
                  id={id}
                  featured="FEATURED"
                  rank="Silver"
                  reward="Kristal Elma"
                  variations="awardsCard"
                  onClick={showAccolades}
                />
              </div>
            );
          })}
        </div>
      )}

      {show ? (
        <div className={styles.buttonGroup}>
          <Button
            variations="secondary"
            size="md"
            label="New Award"
            onClick={newAward}
          />
          <Button
            variations="primary"
            size="md"
            label="Save and Exit"
            onClick={saveAndExit}
          />
        </div>
      ) : (
        <div className={styles.buttonGroup}>
          <Button
            variations="secondary"
            size="md"
            label="Exit"
            onClick={routerBack}
          />
          <Button
            variations="primary"
            size="md"
            label="New Award"
            onClick={newAward}
          />
        </div>
      )}
    </div>
  );
};

export default AwardsContainer;
