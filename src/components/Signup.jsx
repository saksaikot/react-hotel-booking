import React, { useRef } from "react";
import { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth, currentUser } from "../contexts/AuthContext";
import { of } from "await-of";
import { json } from "body-parser";
import { Link, useHistory } from "react-router-dom";
import routePaths from "./routerPaths";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value)
      return setError("Password do not match");
    if (nameRef.current.value < 3)
      return setError("Name must be set, and greater than 3 character");
    setLoading(true);
    const [signupResult, signupResultError] = await of(
      signup(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      )
    );
    setLoading(false);
    if (signupResultError) return setError(signupResultError.message);
    // console.log(signupResult);

    setError("");
    history.push(routePaths.gallery);
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have account? <Link to={routePaths.login}>Log in</Link>
      </div>
    </div>
  );
}
