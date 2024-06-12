import React, { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 

import logo from '../../Assets/logo.jpg';
import './Sidebar.css';

function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (sidebarOpen && !e.target.closest('.sidebar') && !e.target.closest('.menu-icon')) {
                closeSidebar();
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [sidebarOpen]);

    const logoutFunction = () => {
        // Implement logout functionality
    };

    const user = {
        photo: 'user-photo.jpg',
        name: 'John Doe'
    };

    return (
        <div className='App2 mt-2 overflow-hidden'>
            <div className="navbar">
                <button className="menu-icon" onClick={openSidebar}>
                    <i className="bi bi-list"></i>
                </button>
                {/* <Link to="/">
                    <img src={logo} id='nav2-img' alt="Logo" />
                </Link> */}
            </div>
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <span className='cursor-pointer close-btn' onClick={closeSidebar}>
                    &times;
                </span>
                {user ? (
                    <div className="profile">
                        <Link to={"/profile"}>
                            <img className='rounded-full justify-center' src={user.photo} alt="User" />
                        </Link>
                        <p className="text-center">
                            Profilename<span className='font-bold text-blue-500'>{user.name}</span>
                        </p>
                    </div>
                ) : (
                    <div className="auth">
                        {/* Auth content */}
                    </div>
                )}
    <Link to="/internship">Internships</Link><br/>
                    <Link to="/jobs">Jobs</Link><br/>
                    <Link to={"/contact"} className='small'>Contact Us</Link>
                    <hr/>
                    {user ? (
                        <Link to={'/userapplication'}>
                            <p>My Applications</p>
                        </Link>
                    ) : (
                        <>
                            <Link to={"/register"}>
                                <p>Register</p>
                            </Link>
                            <Link to={"/viewresume"}>
                                <p>View Resume</p>           
                            </Link>
                            <Link to={"/more"}>
                                <p>More</p>
                            </Link>
                            <div className='addmore'>
                                <p>Register - As a Student</p>
                                <p>Register - As an Employer</p>
                                <br/>
                                <br/>
                            </div>
                        </>
                    )}
                    <button className='btn-log' id='bt' onClick={logoutFunction}>
                        <i className="bi bi-box-arrow-right"></i>
                    </button>   
                    
                             </div>
        </div>
    );
}

export default Sidebar;
