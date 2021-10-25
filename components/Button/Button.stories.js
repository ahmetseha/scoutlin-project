import React from "react";

import Button from "./Button";

export default {
  title: "components/Button",
  component: Button,
};

export const primary = (args) => {
  return <Button {...args} />;
};
primary.args = {
  variations: "primary",
  size: "md",
  label: "New Award",
};

export const secondary = (args) => {
  return <Button {...args} />;
};
secondary.args = {
  variations: "secondary",
  size: "md",
  label: "Exit",
};
export const primaryBlock = (args) => {
  return <Button {...args} />;
};
primaryBlock.args = {
  variations: "primary",
  size: "block",
  label: "New Award",
};
export const secondaryBlock = (args) => {
  return <Button {...args} />;
};
secondaryBlock.args = {
  variations: "secondary",
  size: "block",
  label: "Exit",
};
