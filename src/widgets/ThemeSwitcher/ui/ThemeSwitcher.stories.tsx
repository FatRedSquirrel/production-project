import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "ui/ThemeSwitcher",
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = () => <ThemeSwitcher/>;

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
