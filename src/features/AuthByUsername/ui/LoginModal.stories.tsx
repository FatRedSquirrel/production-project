import { ComponentMeta, ComponentStory } from "@storybook/react";

import { LoginModal } from "./index";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "features/LoginModal",
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
