import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

import logo1 from "../../assets/logo1.gif";
import logo2 from "../../assets/logo2.gif";
import logo3 from "../../assets/logo3.gif";
import logo4 from "../../assets/logo4.gif";

import s from './Header.module.css';
import {Button, Input} from "antd";

const Logout = (props) =>
    <div className={s.logoutBlock}>
        <div className={s.logoutText}>
            {props.login}
        </div>
        <div className={s.logoutB}>
            <Button danger onClick={props.logout}
                    style={{height: 60, border: 0, fontSize: 20}}>Exit</Button>
        </div>
    </div>

const Header = (props) => {

    const history = useHistory();
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
        <img onClick={changeLogo} src={logo} alt={"logo"}/>
        <div className={s.inputAPI}>
            <input placeholder={"Input API-KEY here"}
                   style={{height: 50, width: 150, border: 0}}/>
        </div>
        <div className={s.authBlock}>
            {props.isAuth
                ? <Logout logout={props.logout} login={props.login}/>
                : <Button onClick={() => history.push("/login")}
                          style={{height: 60, border: 0, fontSize: 20}}>Log in</Button>}
        </div>
    </header>
};

export default Header;