import React from "react";

import DeleteButton from "./DeleteButton";

export default {
  title: "components/DeleteButton",
  components: DeleteButton,
};

export const deleteButton = (args) => {
  return <DeleteButton {...args} />;
};
