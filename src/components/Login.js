import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as mutations from '../store/mutations';
import { Form, Button, Container, Col } from 'react-bootstrap';
const Login = ({ authenticateUser, authenticated }) => {
    const [email, setEmail] = useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState('');

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault() // stops default reloading behaviour
        authenticateUser(email, password)
    }

    return (
        <Container>

            <Col md={4}>
                <br />
                <h2>Login</h2>
                <br />
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" value={email} onChange={handleEmailChange} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" value={password} onChange={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    {authenticated === mutations.NOT_AUTHENTICATED ? <p>Login Incorrect</p> : console.log("isAuthenticated", authenticated)}
                    <Button variant="primary" type="submit">
                        Submit
                   </Button>
                </Form>
            </Col>
        </Container>
    );
};

const mapStateToProps = ({ session }) => {
    return { authenticated: session.authenticated }
};

const mapDispatchToProps = (dispatch) => ({
    authenticateUser(email, password) {
        dispatch(mutations.requestAutenticateUser(email, password));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);