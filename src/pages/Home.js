import React from "react";
import { Feature, OptForm  } from "../components";
import {
  FaqsContainer,
  FooterContainer,
  HeaderContainer,
  JumbotronContainer,
} from "../containers";
import jumboData from "../fixtures/jumbo.json";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
     
        <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
        </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer data={jumboData} />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
