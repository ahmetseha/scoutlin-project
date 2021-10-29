import { useState } from "react";
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

const AwardsContainer = () => {
  // media query in jsx (react-media-hook)
  const biggerThan600 = useMediaPredicate("(max-width: 600px)");

  const [showContainer, setShowContainer] = useState(true);
  const [showAccoladesPrevies, setShowAccoladesPrevies] = useState(false);
  const [showAwardsCardSection, setShowAwardsCardSection] = useState(false);
  const [addCard, setAddCard] = useState([]);

  const showAccolades = () => setShowAccoladesPrevies(true);
  const closeTheContainer = () => setShowContainer(false);

  const getAward = () => {
    setShowAwardsCardSection(true);
    const id = uniqid();
    setAddCard((addCard) => [
      ...addCard,
      {
        id: id,
      },
    ]);
  };

  return (
    <>
      {showContainer && (
        <div className={styles.container}>
          <div className={styles.awardsHead}>
            <div className={styles.mobileHeader}>
              <MobileHeader />
            </div>
            <CloseButton onClick={closeTheContainer} />
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
                  ? addCard.slice(0, 2).map((q) => {
                      return (
                        <AwardsCard
                          variations="awardsCard"
                          onClick={showAccolades}
                          key={q.id}
                          i={addCard.length + 1}
                          id={q.id}
                        />
                      );
                    })
                  : addCard.slice(0, 1).map((q) => {
                      return (
                        <AwardsCard
                          variations="responsiveAwardsCard"
                          onClick={showAccolades}
                          key={q.id}
                          i={addCard.length + 1}
                          id={q.id}
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
                onClick={closeTheContainer}
              />
            </div>
          ) : (
            <div className={styles.buttonGroup}>
              <Button
                variations="secondary"
                size="md"
                label="Exit"
                onClick={closeTheContainer}
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
      )}
    </>
  );
};

export default AwardsContainer;
