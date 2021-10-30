import { useState, useRef } from "react";
import { useMediaPredicate } from "react-media-hook";
import uniqid from "uniqid";

import styles from "./AwardsContainer.module.css";
import CloseButton from "../CloseButton/CloseButton";
import Accolades from "../Accolades/Accolades";
import AwardsCard from "../AwardsCard/AwardsCard";
import AwardsCardSectionEmpty from "../AwardsCardSectionEmpty/AwardsCardSectionEmpty";
import Button from "../Button/Button";
import MobileHeader from "../MobileHeader/MobileHeader";
import AccoladesPreview from "../AccoladesPreview/AccoladesPreview";
import router from "next/router";

const AwardsContainer = () => {
  // media query in jsx (react-media-hook)
  const biggerThan600 = useMediaPredicate("(max-width: 600px)");

  // const modelRef = useRef();

  const [showAccoladesPrevies, setShowAccoladesPrevies] = useState(false);
  const [showAwardsCardSection, setShowAwardsCardSection] = useState(false);
  const [addCard, setAddCard] = useState([]);

  const showAccolades = () => {
    setShowAccoladesPrevies(true);
  };

  const routerBack = () => {
    router.back("/");
  };

  const getAward = () => {
    setShowAwardsCardSection(true);
    const id = uniqid();
    setAddCard((addCard) => [...addCard, { id: id }]);
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

      {showAccoladesPrevies && (
        <div className={styles.accoladesPreview}>
          <AccoladesPreview />
        </div>
      )}

      {!showAwardsCardSection ? (
        <AwardsCardSectionEmpty />
      ) : (
        <div className={styles.awardsCardsContainer}>
          <div className={styles.awardsCards}>
            {!biggerThan600
              ? addCard.slice(0, 2).map((index) => {
                  return (
                    <AwardsCard
                      variations="awardsCard"
                      onClick={showAccolades}
                      key={index}
                    />
                  );
                })
              : addCard.slice(0, 1).map((index) => {
                  return (
                    <AwardsCard
                      variations="responsiveAwardsCard"
                      onClick={showAccolades}
                      key={index}
                    />
                  );
                })}
          </div>
        </div>
      )}

      {showAccoladesPrevies ? (
        <div className={styles.buttonGroup}>
          <Button
            variations="secondary"
            size="md"
            label="New Award"
            onClick={getAward}
          />
          <Button
            variations="primary"
            size="md"
            label="Save and Exit"
            onClick={routerBack}
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
            onClick={getAward}
          />
        </div>
      )}
    </div>
  );
};

export default AwardsContainer;
