import React from "react";
import { Header } from "../components";

import * as ROUTE from "../contants/routes";

import logo from "../logo.svg";

const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTE.HOME} src={logo} />
        <Header.ButtonLink to={ROUTE.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
};

export default HeaderContainer;
