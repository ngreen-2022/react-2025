import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader'
import './MainNavigation.css';

const MainNavigation = props => {
    return <MainHeader>
        <button className="main-navigation__menu-btn">
            <span  />
            <span  />
            <span  />
            <h1 className="main-navigation__title">
                <Link to="/">
                    Your Places
                </Link>
            </h1>
            <nav>
                ...
            </nav>
        </button>
    </MainHeader>
}

export default MainNavigation;