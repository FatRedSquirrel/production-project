import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal } from "shared/ui/Modal/index";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "ui/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: "TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText",
  isOpen: true
};

export const Dark = Template.bind({});
Dark.args = {
  children: "TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText",
  isOpen: true
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
