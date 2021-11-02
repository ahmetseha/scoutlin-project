import { useState, createContext, useContext } from "react";
import axios from "axios";

const Store = createContext({});

export const RewardContext = ({ children }) => {
  const [show, setShow] = useState(false);
  const [card, setCard] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const [featuredValue, setFeaturedValue] = useState("");
  const [rankValue, setRankValue] = useState("");
  const [rewardValue, setRewardValue] = useState("");

  // const removeAwardsCard = (id) => {
  //   setCard(() => card.filter((q) => q.id !== id));
  // };

  // const values = [inputValue, rankValue, rewardValue, featuredValue];
  // values.forEach((item) => {
  //   item === " "
  // })

  const postInputValues = async () => {
    const url = "https://enzwniipnqlq320.m.pipedream.net";
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const values = [inputValue, rankValue, rewardValue, featuredValue];
    await axios
      .post(url, values)
      .then(() => alert("Your rewards have been sent."))
      .catch((err) => alert(err));
  };
  return (
    <Store.Provider
      value={{
        show,
        setShow,
        card,
        setCard,
        postInputValues,
        inputValue,
        setInputValue,
        featuredValue,
        setFeaturedValue,
        rankValue,
        setRankValue,
        rewardValue,
        setRewardValue,
      }}>
      {children}
    </Store.Provider>
  );
};

export const useAppContext = () => {
  return useContext(Store);
};
