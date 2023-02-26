import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ErrorPage} from "./ErrorPage";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: 'widgets/ErrorPage',
    component: ErrorPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = () => <ErrorPage/>;

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
