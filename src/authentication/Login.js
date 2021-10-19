import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import "./Login.css";

const Login = () => {

    // Destracturing data from useAuth Hook as Context Api
    const { setUser, user, setError, error, setIsLoading, isLoading,  handleUserRegister, handleUserLogin, handleGoogleLogin, setUserName } = useAuth();

    // setting location of the page and History then Redirect funtionality
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home' ;
    console.log("came from", redirect_uri);
    console.log(user, error)

    // states for username, email, password and user logged in or not
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [isLogin, setIsLogin] = useState(false);


    //////////////////////////////////////////// Functions /////////////////////////

    // setting user name for email & pass register
    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    // Email input function
    const handleEmailInput = (e) =>{
        setEmail(e.target.value);
    }
    // Password input function
    const handlePassInput = (e) =>{
        setPass(e.target.value);
    }
    console.log(email, pass)

    // If registred then change the form by checking chek-box toggle function
    const toggleLogIn = e =>{
        setIsLogin(e.target.checked);
    }
    
    // Email & password Registration function
    const handleRegister = () => {
        handleUserRegister(email, pass);
        // setUserName(name);
    };

    // Update username function for email & pass , but couldn't apply it
    // const handleRegUserName = () =>{
    //     setUserName(name);
    // }

    // Email & password Login
    const handleLogin = () => {
        handleUserLogin(email, pass);
    };

    
    // Google Popup Login function
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
            <div className="login-card">
                {/************************  Registration and Log in form ********************/}
                <Form>
                
                        {/*******  Useing ternary operator for changing between Register and Log in page  ********/}
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
                        <Form.Check onChange={toggleLogIn} type="checkbox" label="Fill the Check-box if you Already have an Account to log-in" />
                    </Form.Group>
                    {/* {isLogin && <Button size="sm" variant="link">Forgot Password</Button>} */}
                    {
                        isLogin ? 
                        <Button onClick={handleLogin} variant="secondary">Log-In</Button> : 
                        <Button onClick={handleRegister} variant="secondary">Register</Button>
                    }
                </Form><br/>
                <Button variant="btn btn-secondary" onClick={handleGoogleLoginRedirect} >Google Sign-in</Button>
            </div>
            
        </div>
    );
};

export default Login;