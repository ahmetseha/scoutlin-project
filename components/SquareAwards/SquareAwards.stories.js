import React from "react";

import SquareAwards from "./SquareAwards";

export default {
  title: "components/SquareAwards",
  components: SquareAwards,
};

export const squareAwards = (args) => {
  return <SquareAwards {...args} />;
};
