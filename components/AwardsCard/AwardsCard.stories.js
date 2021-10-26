import React from "react";

import AwardsCard from "./AwardsCard";

export default {
  title: "components/AwardsCard",
  component: AwardsCard,
};

export const awardsCard = (args) => {
  return <AwardsCard {...args} />;
};
awardsCard.args = {
  variations: "awardsCard",
};

export const responsiveAwardsCard = (args) => {
  return <AwardsCard {...args} />;
};
responsiveAwardsCard.args = {
  variations: "responsiveAwardsCard",
};
