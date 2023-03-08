import React from 'react';
import img1 from '../../images/LWSBlog.svg'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="py-4 border-b">
            <div className="navbar-container">
                {/* <!-- logo --> */}
                <div className="logo">
                    <Link to="/">
                        <img src={img1} alt="search" />
                    </Link>
                </div>
                {/* <!-- auth buttons , This will nonfunctional, just for nice looking --> */}
                <div className="auth-buttons">
                    <button className="btn btn-primary">sign in</button>
                    <button className="btn btn-outline">sign up</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;