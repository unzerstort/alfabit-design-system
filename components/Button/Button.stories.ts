import { Meta, StoryObj } from "@storybook/react/*";
import Button from "./Button";
import { ButtonProps } from "@/stories/Button";

const meta: Meta<ButtonProps> = {
    title: 'Molecules/Button',
    component: Button,
    argTypes: {
        children: {
            type: "string"
        },
        disabled : {
            type: "boolean"
        },
        className : {
            type: "string"
        }
    }
}

export default meta;

export const Primary: StoryObj<typeof Button> = {
    args: {
        children: 'Button'
    }
}

export const Violet: StoryObj<ButtonProps> = {
    args: {
        children: 'Button',
        className: 'theme-violet'
    }
}