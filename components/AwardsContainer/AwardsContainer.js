import { useState } from "react";
import { useMediaPredicate } from "react-media-hook";

import styles from "./AwardsContainer.module.css";
import CloseButton from "../CloseButton/CloseButton";
import Accolades from "../Accolades/Accolades";
import AwardsCardSection from "../AwardsCardSection/AwardsCardSection";
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

  const showAccolades = () => setShowAccoladesPrevies(true);
  const closeTheContainer = () => setShowContainer(false);
  const getAward = () => setShowAwardsCardSection(true);

  // TODO: CONTEXT SORUNUNU ÇÖZÜP AŞAĞIDAKİNİ EKLE (uniqid ile birlikte)

  // const [addCard, setAddCard] = useState([]);
  // GET AWARD CARD
  // const getAward = () => {
  //   const id = uniqid();
  //   setAddCard((addCard) => [
  //     ...addCard,
  //     {
  //       id: id,
  //     },
  //   ]);
  // };
  // ADD AWARDS CARD
  // {addCard.map((q) => {
  //   return (
  //     <AwardsCard
  //       variations="awardsCard"
  //       key={q.id}
  //       i={addCard.length + 1}
  //       id={q.id}
  //     />
  //   );
  // })}

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

          {showAccoladesPrevies ? (
            <div className={styles.accoladesPreview}>
              <AccoladesPreview />
            </div>
          ) : null}

          {showAwardsCardSection ? (
            <div className={styles.awardsCardSection}>
              <AwardsCardSection onClick={showAccolades} />
            </div>
          ) : (
            <div className={styles.awardsCardSection}>
              <AwardsCardSectionEmpty />
            </div>
          )}

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
        </div>
      )}
    </>
  );
};

export default AwardsContainer;
