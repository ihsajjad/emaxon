import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const SignUp = () => {
    const [error, setError] = useState(' ');
    const {createUser} = useContext(AuthContext);
    

    const handleSignUp = (event) => {
        event.preventDefault()
        setError('')
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm = event.target.confirm.value;

        if(password !== confirm){
            setError("Your password didn't match")
            return;
        }
        else if(password.length < 6){
            setError("Password should be 6 characters or longer")
            return;
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error)
            setError(error.message);
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Your Email' />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='Your Password' />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirm" id="" placeholder='Confirm Password' />
                </div>
                <p className='error-text'>{error}</p>
                <input className='btn-submit' type="submit" value="Sign Up" />
                <p className='text-blow-btn'>Already Have An Account? <span> <Link to="/login">Log In</Link></span></p>
            </form>
        </div>
    );
};

export default SignUp;