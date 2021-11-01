import { useState, createContext } from "react";

const Store = createContext({});

export const RewardContext = ({ children }) => {
  const [show, setShow] = useState(false);
  const [awardCardSvg, setAwardCardSvg] = useState({});

  return (
    <Store.Provider
      value={{
        show,
        setShow,
        awardCardSvg,
        setAwardCardSvg,
      }}>
      {children}
    </Store.Provider>
  );
};
