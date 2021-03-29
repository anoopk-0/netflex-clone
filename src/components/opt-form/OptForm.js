import React from "react";
import { Container, Input, Button, Text, Break } from "./styles";

const OptForm = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

OptForm.Input = function OptFormInput({ ...props }) {
  return <Input {...props} />;
};

OptForm.Button = function OptFormButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
};
OptForm.Button = function OptFormButton({ children, ...props }) {
  return (
    <Button {...props}>
      {children} <img src="/images/icons/chevron-right.png" alt="try now" />
    </Button>
  );
};

OptForm.Break = function OptFormBreak({ children, ...props }) {
  return <Break />;
};

OptForm.Text = function OptFormText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};

export default OptForm;
