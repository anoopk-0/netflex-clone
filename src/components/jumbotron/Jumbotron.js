import React from "react";

import { Item, Inner, Container, Title, Image, Pane, SubTitle } from "./styles";

const Jumbotron = ({ children, direction, ...props }) => {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

Jumbotron.Container = function JumbotronContainer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...props }) {
  return <Pane {...props}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...props }) {
  return <SubTitle {...props}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...props }) {
  return <Image {...props} />;
};

export default Jumbotron;
