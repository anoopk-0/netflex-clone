import React from "react";
import {
  Container,
  Error,
  Title,
  Base,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from "./styles";

const Form = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

Form.Error = function FormError({ children, ...props }) {
  return <Error {...props}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...props }) {
  return <Base {...props}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Form.TextSmall = function FormTextSmall({ children, ...props }) {
  return <TextSmall {...props}>{children}</TextSmall>;
};
Form.Text = function FormText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};

Form.Link = function FormLink({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
};

Form.Input = function FormInput({ ...props }) {
  return <Input {...props} />;
};

Form.Submit  = function FormSubmit ({children,...props}){
    return <Submit   {...props}>{children}</Submit  >;
}

export default Form;
