import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Navbar } from "./Navbar";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

export default {
  title: "widgets/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar/>;

export const Authorized = Template.bind({});
Authorized.decorators = [StoreDecorator({
  user: {
    authData: {
      id: "123",
      username: "123"
    }
  }
})];

export const notAuthorized = Template.bind({});
notAuthorized.decorators = [StoreDecorator({
  user: {
    authData: undefined
  }
})];
