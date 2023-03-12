import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";

export default {
  title: "ui/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Text"
};

export const Clear = Template.bind({});
Clear.args = {
  children: "Text",
  theme: ButtonTheme.CLEAR
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: "Text",
  theme: ButtonTheme.CLEAR_INVERTED
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: "Text",
  theme: ButtonTheme.OUTLINE
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: "Text",
  theme: ButtonTheme.BACKGROUND
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
  children: "Text",
  theme: ButtonTheme.BACKGROUND_INVERTED
};

export const Loading = Template.bind({});
Loading.args = {
  theme: ButtonTheme.OUTLINE,
  loading: true
};

export const SquareMode = Template.bind({});
SquareMode.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.M
};

export const SquareModeSizeL = Template.bind({});
SquareModeSizeL.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L
};

export const SquareModeSizeXL = Template.bind({});
SquareModeSizeXL.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL
};
