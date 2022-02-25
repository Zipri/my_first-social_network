import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

import logo1 from "../../assets/logo1.gif";
import logo2 from "../../assets/logo2.gif";
import logo3 from "../../assets/logo3.gif";
import logo4 from "../../assets/logo4.gif";
import logout from "../../assets/logout.png"

import s from './Header.module.css';

const LogoutButton = (props) =>
    <div className={s.logoutB}>
        <img src={logout} onClick={props.logout}/>
    </div>

const Header = (props) => {

    let [logo, setLogo] = useState(logo1)

    const changeLogo = () => {
        switch (logo) {
            case logo1:
                return setLogo(logo2)
            case logo2:
                return setLogo(logo3)
            case logo3:
                return setLogo(logo4)
            case logo4:
                return setLogo(logo1)
            default:
                return setLogo(logo1)
        }
    }

    return <header className={s.header}>
        <img onClick={changeLogo} src={logo}/>
        {props.isAuth && <LogoutButton logout={props.logout}/>}
        <div className={s.loginBlock}>
            {props.isAuth
                ? props.login
                : <NavLink to="/login">Login</NavLink>}
        </div>
    </header>
};

export default Header;