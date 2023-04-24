import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
    const [show, setShow] = useState(false);
    const {signIn, setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";
    
    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email , password)

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
            navigate(from , {replace: true});
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSignIn}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Your Email'/>
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name="password" id="" placeholder='Your Password'/>
                    <p onClick={() => setShow(!show)}>
                        <small>
                            {
                                show 
                                ? <span>Hide</span>
                                : <span>Show</span>
                            }
                        </small>
                    </p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p className='text-blow-btn'>New to Ema-Jhon? <span> <Link to="/sign-up">Create New Account</Link></span></p>
            </form>
        </div>
    );
};

export default Login;