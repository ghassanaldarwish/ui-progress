import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./index";
const meta: Meta<typeof Progress> = {
  component: Progress,
  title: "Marbella/Progress",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = (args: any) => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return <Progress value={progress} className="w-[60%]" />;
};
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
