// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import "./login.css";
import netflix from "../assets/logo.png";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [change, setChanged] = useState({
    email: "",
    username: "",
    password: ""
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signup, signin } = useAuth();
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setChanged({
      email: "",
      username: "",
      password: ""
    });
    setError('');
  };

  const changeHandler = (e) => {
    setChanged(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!change.email || !change.password) {
      setError('Please fill in all fields');
      return;
    }

    if (!isSignIn && !change.username) {
      setError('Please enter a username');
      return;
    }

    setError('');
    setLoading(true);

    try {
      if (isSignIn) {
        // Sign In
        await signin(change.email, change.password);
      } else {
        // Sign Up
        await signup(change.email, change.password, change.username);
      }
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error('Authentication error:', error);
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div className='background_2 flex flex-col justify-center items-center'>
      <div className='absolute top-0 left-8 p-5'>
        <img src={netflix} alt="Netflix" className='h-10' />
      </div>
      <div className='bg-black p-10 flex flex-col'>
        <h1 className='text-3xl'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        <br/>
        
        {error && (
          <div className='bg-red-600 text-white p-2 rounded mb-4'>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input 
            name="email"
            type="email"
            placeholder='Email'
            className='bg-neutral-600 p-6 w-88 rounded-sm h-10'
            value={change.email}
            onChange={changeHandler}
            disabled={loading}
          />
          <br/><br/>
          
          {!isSignIn && (
            <>
              <input 
                name="username"
                placeholder='Username'
                className='bg-neutral-600 p-6 w-88 rounded-sm h-10'
                value={change.username}
                onChange={changeHandler}
                disabled={loading}
              />
              <br/><br/>
            </>
          )}
          
          <input 
            name="password"
            type="password"
            placeholder='Password'
            className='bg-neutral-600 p-6 w-88 rounded-sm h-10'
            value={change.password}
            onChange={changeHandler}
            disabled={loading}
          />
          <br/><br/>
          
          <button 
            type="submit"
            className='bg-red-600 w-88 rounded-sm h-10'
            disabled={loading}
          >
            {loading ? 'Loading...' : (isSignIn ? 'Sign In' : 'Sign Up')}
          </button>
        </form>
        
        <br/>
        <div className='flex justify-between'>
          <div className='flex'>
            <input type='checkbox' name="remember"/>
            <p className='ml-2'>Remember Me</p>
          </div>
          <p>Need help?</p>
        </div>
        <br/>
        <p>
          {isSignIn ? 'New to Netflix? ' : 'Already have an account? '}
          <span 
            className='text-red-600 cursor-pointer hover:underline'
            onClick={toggleForm}
          >
            {isSignIn ? 'Sign Up' : 'Sign In'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;