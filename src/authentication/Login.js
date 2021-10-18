import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const Login = () => {

    const { setUser, user, setError, error, setIsLoading, isLoading,  handleUserRegister, handleUserLogin, handleGoogleLogin, setUserName } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home' ;
    console.log("came from", redirect_uri);
    console.log(user, error)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    const handleEmailInput = (e) =>{
        setEmail(e.target.value);
    }

    const handlePassInput = (e) =>{
        setPass(e.target.value);
    }
    console.log(email, pass)

    const handleRegister = () => {
        handleUserRegister(email, pass);
        // setUserName(name);
    };

    // const handleRegUserName = () =>{
    //     setUserName(name);
    // }

    const handleLogin = () => {
        handleUserLogin(email, pass);
    };

    const toggleLogIn = e =>{
        setIsLogin(e.target.checked);
    }

    const handleGoogleLoginRedirect = () =>{
        handleGoogleLogin()
        .then(result =>{
            history.push(redirect_uri);
            setUser(result.user);
            setError("");
        })
        .catch(error =>{
            setError(error.message)
        })
        .finally(()=>setIsLoading(false));
    }

    return (
        <div>
            <Form>
                <h2> Please {isLogin ? "Log-in" : "Register"}</h2>
                {!isLogin && <Form.Group className="mb-1" controlId="formGroupEmail">
                        <Form.Label>User-Name</Form.Label>
                        <Form.Control onBlur={handleNameChange} type="text" required placeholder="Enter Username" />
                    </Form.Group> 
                }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailInput} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Don't worry your secrets are safe with us.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassInput} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={toggleLogIn} type="checkbox" label="Already have an Account" />
                </Form.Group>
                {/* {isLogin && <Button size="sm" variant="link">Forgot Password</Button>} */}
                {
                    isLogin ? 
                    <Button onClick={handleLogin} variant="secondary">Log-In</Button> : 
                    <Button onClick={handleRegister} variant="secondary">Register</Button>
                }
                {/* <Button onClick={handleRegister} variant="secondary">Register</Button>
                <Button onClick={handleLogin} variant="secondary">Log-In</Button> */}
            </Form><br/>
            <Button variant="btn btn-secondary" onClick={handleGoogleLoginRedirect} >Google Sign-in</Button>
        </div>
    );
};

export default Login;