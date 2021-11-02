import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

// import { RewardContext } from "../context";
// <RewardContext>
//   <Component {...pageProps} />
// </RewardContext>;
