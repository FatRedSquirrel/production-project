import { addDecorator } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator";
import { TranslationDecorator } from "../../src/shared/config/storybook/TranslationDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(StyleDecorator);
addDecorator(TranslationDecorator);

