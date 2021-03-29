import React, { createContext, useState, useContext } from "react";
import { Container, Frame, Title, Item, Inner, Header, Body } from "./styles";

const ToggleContext = createContext();

const Accordion = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Title = function AccordionTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...props }) {
  return <Frame {...props}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...props }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...props}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...props }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...props}
    >
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...props }) {
  const { toggleShow } = useContext(ToggleContext);

  return (
    <Body className={toggleShow ? "open" : "closed"} {...props}>
      <span>{children}</span>
    </Body>
  );
};

export default Accordion;
