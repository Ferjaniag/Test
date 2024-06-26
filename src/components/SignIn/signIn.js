import React , {useState}from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './signIn.css'

// Assuming you're using Bootstrap for styling

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Log the email and password
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className='home flex-column'>
            <div className='productContainer'>
                <div className="Auth-form-container">
                    <form className="Auth-form">
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Sign In</h3>
                            <div className="form-group mt-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                            <Link to='/home' >
                                <Button
                                    className="btn btn-primary"
                                    variant="success"
                                    onClick={handleSignIn}
                                >
                                    Submit
                                </Button>
                                </Link>
                            </div>
                            <p className="forgot-password text-right mt-2">
                                Forgot <a href="#">password?</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
