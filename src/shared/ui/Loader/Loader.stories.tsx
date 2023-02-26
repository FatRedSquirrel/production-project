import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Loader} from "./Loader";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: 'ui/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader/>;

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
