import React, { useState } from 'react';
import logo from '../../Assets/logo.jpg';
import './Navbar.css';
import Sidebar from './Sidebar';
import { signInWithPopup,signOut } from 'firebase/auth';
import {auth,provider} from '../../firebase/firebase';
import { Link } from 'react-router-dom'
function Navbar() {
    const loginFunction=()=>{
        signInWithPopup(auth,provider).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
function showLogin(){
    setDivVisibleLogin(true)
}
function closeLogin(){
    setDivVisibleLogin(false)
}
const setTrueForStudent=()=>{
    setStudent(true)
}
const setFlaseForStudent=()=>{
    setStudent(false)
}
const showInternships=()=>{
    document.getElementById('ico').className="bi bi-caret-up-fill"
    setDivVisibleIntern(true)
}
const hideInternships=()=>{
    document.getElementById('ico').className="bi bi-caret-down-fill"

    setDivVisibleIntern(false)
}
const showJObs=()=>{
    document.getElementById('ico2').className="bi bi-caret-up-fill"

    setDivVisibleJob(true)
}
const hideJobs=()=>{
    document.getElementById('ico2').className="bi bi-caret-down-fill"

    setDivVisibleJob(false)
}
    const user=1;
    const [isDivVisibleIntern,setDivVisibleIntern]=useState(false);
    const [isDivVisibleJob,setDivVisibleJob]=useState(false);
    const [isDivVisibleLogin,setDivVisibleLogin]=useState(false);
    const [isStudent,setStudent]=useState(true);

    return (
        <div>
            <nav className='nav1'>
                <ul>
                    <div className='img'>
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="elem">
                        <Link to={"/Internship"}><p id='int' onMouseOver={showInternships} >Internships</p> <i id="ico"className="bi bi-caret-down-fill" onClick={hideInternships}></i></Link>
                        <Link to={"/Jobs"}> <p onMouseOver={showJObs} >Jobs</p> <i id="ico2"className="bi bi-caret-down-fill" onClick={hideJobs}></i></Link>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;    &nbsp;  &nbsp;
                    <div className="search">
                        <i className="bi bi-search"></i>
                        <input type='search' placeholder='search' />
                    </div>
                    <div className='auth'>
                        <button className='btn1' onClick={showLogin}>Login</button>
                        <button className='btn2'><a href='/register'>Register</a></button>
                    </div>
                    <div className="flex mt-7 hire">
                        Hire Talent
                    </div>
                    <div className="adm">
                        <button>Admin</button>
                    </div>
                </ul>
            </nav>
            {
                isDivVisibleIntern && (
                    <>
                    <div className="profile-dropdown">
                        <div className="left-section">
                    <p>Top Location</p>
                    <p>Profile</p>
                    <p>Top Category</p>
                    <p>Explore More Internships</p>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="right-section">
                            <p>Intern at India</p>
                            <p>Intern at India</p>
                            <p>Intern at India</p>
                            <p>Intern at India</p>
 
                        </div>
                    </div>
                    </>
                )
            }
            {
    isDivVisibleJob && (
        <div className="profile-dropdown">
            <div className="left-section">
                 <p>Top Location</p>
                <p>Profile</p>
                <p>Top Category</p>
                <p>Explore More Jobs</p>
            </div>
            <div className="vertical-line"></div>
            <div className="right-section">
                 <p>Job at USA</p>
                <p>Job at UK</p>
                <p>Job at Canada</p>
                <p>Job at Australia</p>
                <p>Job at Germany</p>
            </div>
        </div>
    )
}

            <div className="login">
                {
                    isDivVisibleLogin &&(
                        <>
                        <button className='close' onClick={closeLogin}><i className='bi bi-x'></i></button>
                       <h5 id='state' className='mb-4 flex justify-center spanelem'>
                        <span id='sign-in' style={{cursor:'pointer'}} className={`authtab ${isStudent?"active":""}`} onClick={setTrueForStudent} >
                            Student
                        </span>
                        &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                        <span id='join-in' style={{cursor:'pointer'}} className={`authtab ${isStudent?"active":""}`} onClick={setFlaseForStudent}>
                            Employee and T&P
                        </span>
                       </h5>
                       {
                        isStudent?(
                            <>
                    <div class="py-6">
    <div class='flex bg-white rounded-lg justify-center items-center overflow-hidden mx-auto max-w-sm lg:max-w-4xl'>
        <p onClick={loginFunction} class='flex items-center h-9 justify-center mt-4 text-white bg-gray-100 rounded-lg hover:bg-gray-200'>
            <div class='px-4'>
                <svg class='h-6 w-6' width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M21.19 12c0-.64-.06-1.25-.18-1.86H12v3.54h4.93a4.43 4.43 0 0 1-1.92 2.9v2.41h3.1c1.82-1.68 2.87-4.16 2.87-7.09z"/>
                    <path fill="#34A853" d="M12 21c2.6 0 4.77-.86 6.34-2.34l-3.1-2.41c-.86.58-1.96.92-3.24.92-2.49 0-4.6-1.68-5.35-3.94H3.57v2.47A8.99 8.99 0 0 0 12 21z"/>
                    <path fill="#FBBC05" d="M6.65 14.24a6.22 6.22 0 0 1 0-3.94V7.83H3.57A9 9 0 0 0 3 12c0 1.45.35 2.83.97 4.05l3.68-2.81z"/>
                    <path fill="#EA4335" d="M12 6.21c1.35 0 2.57.47 3.53 1.4l2.65-2.65C16.77 2.25 14.6 1 12 1a9 9 0 0 0-8.37 5.47l3.68 2.83c.74-2.26 2.86-3.94 5.35-3.94z"/>
                </svg>
            </div><br/>
        </p>
        <h1 className="log">Login With Google</h1><br/>

        <div class="flex-container">
    <span class="border-line"></span>
    <p class="or-text">or</p><br/>
    <span class="border-line"></span>
</div>
<div className="mt-4">
    <label for="" class="label">Email</label>
    <input type="email" class="input-field" placeholder="john@example.com" />
</div><br/>
<div class="mt-4">
    <div class="flex justify-between">
        <label for="" class="label">Password</label><br/>
        <a href="/" class="forget-password">Forget Password?</a>
    </div><br/>
    <input type="password" class="input-field" placeholder="Must be at least 6 characters" />
</div>


    </div>
</div><br/>
<button class="login-button">Login</button>
<p className='text-sm'>New to Find-Intern Area? Register(<span className="text-blue-500 cursor-pointer" onClick={closeLogin}>Student</span>/<span className='text-blue-500 cursor-pointer' onClick={closeLogin}>Company</span>)</p>

                            </>
                        ):(
                            <>
                            <div class='flex bg-white rounded-lg justify-center items-center overflow-hidden mx-auto max-w-sm lg:max-w-4xl'>
        <p onClick={loginFunction} class='flex items-center h-9 justify-center mt-4 text-white bg-gray-100 rounded-lg hover:bg-gray-200'></p>
                         <div class='px-4 py-3'>
                <svg class='h-6 w-6' width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M21.19 12c0-.64-.06-1.25-.18-1.86H12v3.54h4.93a4.43 4.43 0 0 1-1.92 2.9v2.41h3.1c1.82-1.68 2.87-4.16 2.87-7.09z"/>
                    <path fill="#34A853" d="M12 21c2.6 0 4.77-.86 6.34-2.34l-3.1-2.41c-.86.58-1.96.92-3.24.92-2.49 0-4.6-1.68-5.35-3.94H3.57v2.47A8.99 8.99 0 0 0 12 21z"/>
                    <path fill="#FBBC05" d="M6.65 14.24a6.22 6.22 0 0 1 0-3.94V7.83H3.57A9 9 0 0 0 3 12c0 1.45.35 2.83.97 4.05l3.68-2.81z"/>
                    <path fill="#EA4335" d="M12 6.21c1.35 0 2.57.47 3.53 1.4l2.65-2.65C16.77 2.25 14.6 1 12 1a9 9 0 0 0-8.37 5.47l3.68 2.83c.74-2.26 2.86-3.94 5.35-3.94z"/>
                </svg>
            </div><br/>
            <h1>Login With Google</h1><br/>
            </div>
        
       
<div className="mt-4">
    <label for="" class="label">Email</label>
    <input type="email" class="input-field" placeholder="john@example.com" />
</div><br/>
<div class="mt-4">
    <div class="flex justify-between">
        <label for="" class="label">Password</label><br/>
        <a href="/" class="forget-password">Forget Password?</a>
    </div><br/>
    <input type="password" class="input-field" placeholder="Must be at least 6 characters" />
</div>
<button class="login-button">Login</button>



   
                            </>
                        )
                        
                       }
                    </>
                    
                    )
                }
            </div>
            <Sidebar />
        </div>
    );
}

export default Navbar;
