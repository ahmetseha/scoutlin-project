import React from "react";

import CloseButton from "./CloseButton";

export default {
  title: "components/CloseButton",
  components: CloseButton,
};

export const closeButton = (args) => {
  <CloseButton {...args} />;
};
