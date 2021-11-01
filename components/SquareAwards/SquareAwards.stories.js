import React from "react";

import SquareAwards from "./SquareAwards";

export default {
  title: "components/SquareAwards",
  components: SquareAwards,
};

export const squareAwardsS = (args) => {
  return <SquareAwards {...args} />;
};
squareAwardsS.args = {
  variations: "squareAwardsS",
};
export const squareAwardsB = (args) => {
  return <SquareAwards {...args} />;
};
squareAwardsB.args = {
  variations: "squareAwardsB",
};
export const squareAwards3 = (args) => {
  return <SquareAwards {...args} />;
};
squareAwards3.args = {
  variations: "squareAwards3",
};
