import {Meta, StoryFn} from "@storybook/react"
import { BrowserRouter } from "react-router-dom"
import { Button } from "./Button"
import "./Button.css"

export default {
    title: "components/Button",
    component: Button,
} as Meta;

const Template: StoryFn = (args) => {
    return (
        <BrowserRouter>
        <Button submit= {args.submit}/>
        </BrowserRouter>
    );
};

export const Default = Template.bind({});
Default.args = {
    submit: {key: "value"}
};