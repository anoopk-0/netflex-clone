import React, { useState, useContext } from "react";
import { Form } from "../components";
import { FooterContainer, HeaderContainer } from "../containers";
import FirebaseContext from "../context/firebase";
import * as ROUTE from "../contants/routes";
import { useHistory } from "react-router-dom";

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory()

  const isInvalid = email === "" || password === "";

  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    //firebase work here.
    //read doc

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        history.push(`${ROUTE.BROWSE}`)
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Base onSubmit={handleSubmit}>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            <Form.Input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <Form.Submit type="submit" disabled={isInvalid}>
              Sign In
            </Form.Submit>
            <Form.Text>
              New to Netflix?{" "}
              <Form.Link to={`${ROUTE.SIGN_UP}`}>Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <Form.Link to="">Learn more.</Form.Link>
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignIn;
