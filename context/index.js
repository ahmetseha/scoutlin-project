import { useState, createContext } from "react";

const Store = createContext({});

export const StoreProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [removeAwardsCard, setRemoveAwardsCard] = useState([]);

  const showComponent = setShow(true);
  const removeCard = (id) => {
    setRemoveAwardsCard((removeAwardsCard) =>
      removeAwardsCard.filter((q) => q.id !== id)
    );
  };

  return (
    <Store.Provider
      value={{
        show,
        setShow,
        showComponent,
        removeAwardsCard,
        setRemoveAwardsCard,
        removeCard,
      }}>
      {children}
    </Store.Provider>
  );
};
