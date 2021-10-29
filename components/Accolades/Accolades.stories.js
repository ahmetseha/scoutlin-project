import React from "react";

import Accolades from "./Accolades";

export default {
  title: "components/Accolades",
  components: Accolades,
};

export const accoladesContent = (args) => {
  return <Accolades {...args} />;
};
