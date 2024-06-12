import React from 'react';
import './Register.css';
import {auth,provider} from '../firebase/firebase';
import { signInWithPopup,signOut } from 'firebase/auth';
function Register() {
    const loginFunction=()=>{
        signInWithPopup(auth,provider).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Sign Up</h2>
        <button >
       <p onClick={loginFunction}> <svg className="google-signup" class='h-6 w-6' width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M21.19 12c0-.64-.06-1.25-.18-1.86H12v3.54h4.93a4.43 4.43 0 0 1-1.92 2.9v2.41h3.1c1.82-1.68 2.87-4.16 2.87-7.09z"/>
                    <path fill="#34A853" d="M12 21c2.6 0 4.77-.86 6.34-2.34l-3.1-2.41c-.86.58-1.96.92-3.24.92-2.49 0-4.6-1.68-5.35-3.94H3.57v2.47A8.99 8.99 0 0 0 12 21z"/>
                    <path fill="#FBBC05" d="M6.65 14.24a6.22 6.22 0 0 1 0-3.94V7.83H3.57A9 9 0 0 0 3 12c0 1.45.35 2.83.97 4.05l3.68-2.81z"/>
                    <path fill="#EA4335" d="M12 6.21c1.35 0 2.57.47 3.53 1.4l2.65-2.65C16.77 2.25 14.6 1 12 1a9 9 0 0 0-8.37 5.47l3.68 2.83c.74-2.26 2.86-3.94 5.35-3.94z"/>
                </svg>
                </p>
                </button>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        <p>Already have an account? <a href="/login">Log in</a></p>
      </div>
    </div>
  );
}

export default Register;
