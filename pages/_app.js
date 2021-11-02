import "../styles/globals.css";
import { RewardContext } from "../context";

const MyApp = ({ Component, pageProps }) => {
  return (
    <RewardContext>
      <Component {...pageProps} />
    </RewardContext>
  );
};

export default MyApp;
