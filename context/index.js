import { useState, createContext, useContext } from "react";
import axios from "axios";

const Store = createContext({});

export const RewardContext = ({ children }) => {
  const [show, setShow] = useState(false);
  const postInputValues = () => {
    const url = "https://enzwniipnqlq320.m.pipedream.net";
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const values = values;

    axios.post(url, values).catch((err) => alert(err));

    alert("Your rewards have been sent.");
  };

  return (
    <Store.Provider
      value={{
        show,
        setShow,
        postInputValues,
      }}>
      {children}
    </Store.Provider>
  );
};

export const useAppContext = () => {
  return useContext(Store);
};
