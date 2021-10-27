import React from "react";

import Accolades from "./Accolades";

export default {
  title: "components/Accolades",
  components: Accolades,
};

export const accoladesContent = (args) => {
  return <Accolades {...args} />;
};
accoladesContent.args = {
  head: "Accolades",
  explanation: "Determine how much minimum wage you work.",
};
export const accoladesContentAboutCreathive = (args) => {
  return <Accolades {...args} />;
};
accoladesAboutCreathive.args = {
  head: "About Creathive",
  explanation: "Write a description about your agency.",
};
