import Button from "./Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "#000000",
  label: "Press Me",
  size: "md",
};
