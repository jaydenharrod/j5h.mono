// example storybook story
import { Button } from ".";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => <Button primary label="Button" />;
export const Secondary = () => <Button label="Button" />;
export const Large = () => <Button size="large" label="Button" />;
export const Small = () => <Button size="small" label="Button" />;
