import React, { useState, useContext } from "react";
import { Form } from "../components";
import { FooterContainer, HeaderContainer } from "../containers";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../contants/routes";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const isInvalid = email === "" || password === "" || name === "";

  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    //firebase work here.
    //read doc

    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: name,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setName("");
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
              placeholder="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
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
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignUp;
