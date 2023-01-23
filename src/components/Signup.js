import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Signup() {
  const emailref = useRef();
  const pwdref = useRef();
  const cpwdref = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (pwdref.current.value !== cpwdref.current.value) {
      return setError("Password do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailref.current.value, pwdref.current.value);
      navigate("/");
    } catch {
      setError("Failed to signup");
    }
    setLoading(false);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Signup</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" ref={emailref} required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={pwdref} required />
            </Form.Group>

            <Form.Group id="c-pwd">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control type="password" ref={cpwdref} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Signup
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account?<Link to="/login">Login</Link>
      </div>
    </>
  );
}

export default Signup;
