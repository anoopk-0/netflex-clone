import React from "react";

import {
    Container,
    Group,
    Background,
    Dropdown,
    Picture,
    Link,
    Search,
    Profile,
    FeatureCallOut,
    SearchIcon,
    SearchInput,
    ButtonLink,
    PlayButton,
    Text,
    Feature,
    Logo,
  } from './styles';
  
import { Link as ReachRouterLink } from "react-router-dom";

const Header = ({ bg = true, children, ...props }) => {
  return bg ? <Background {...props}>{children}</Background> : children;
};

Header.Frame = function HeaderFrame({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...props }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...props} />
    </ReachRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...props }) {
  return <ButtonLink {...props}>{children}</ButtonLink>;
};



export default Header;
