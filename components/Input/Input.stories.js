import React from "react";

import Input from "./Input";

export default {
  title: "components/Input",
  components: Input,
};

export const Inputs = (args) => {
  return <Input {...args} />;
};
