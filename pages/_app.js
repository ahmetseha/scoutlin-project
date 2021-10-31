import "../styles/globals.css";
import { RewardContext } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <RewardContext>
      <Component {...pageProps} />
    </RewardContext>
  );
}

export default MyApp;
