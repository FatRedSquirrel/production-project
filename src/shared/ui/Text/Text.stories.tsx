import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "ui/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Lorem ipsum TITLE",
  text: "Lorem ipsum TEXT"
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "Lorem ipsum TITLE"
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: "Lorem ipsum TEXT"
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: "Lorem ipsum TITLE",
  text: "Lorem ipsum TEXT"
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: "Lorem ipsum TITLE"
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: "Lorem ipsum TEXT"
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: "Lorem ipsum TITLE",
  text: "Lorem ipsum TEXT",
  theme: TextTheme.ERROR
};
