import React from "react";

import Input from "./Input";

export default {
  title: "components/Input",
  components: Input,
};

export const Inputs = (args) => {
  return <Input {...args} />;
};
Inputs.args = {
  variations: "input",
};
export const BlockInput = (args) => {
  return <Input {...args} />;
};
BlockInput.args = {
  variations: "BlockInput",
};
