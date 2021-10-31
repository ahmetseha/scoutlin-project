import { useState, createContext } from "react";

const Store = createContext({});

export const RewardContext = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <Store.Provider
      value={{
        show,
        setShow,
      }}>
      {children}
    </Store.Provider>
  );
};
