import React from 'react'
import {NavLink} from "react-router-dom";
import {Menu} from 'antd';
import s from './Navbar.module.css'

const pagesLinks = [
    {label: 'Profile', key: '/profile'},
    {label: 'Messages', key: '/dialogs'},
    {label: 'News', key: '/news'},
    {label: 'Users', key: '/users'},
    {label: 'Settings', key: '/settings'},
    {label: 'FAQ', key: '/settings'},
];

const Navbar = () => {
    const menuItem = (key, link, label) =>
        <Menu.Item key={key}>
            <NavLink to={link}>{label}</NavLink>
        </Menu.Item>

    return <Menu style={{width: 250}} selectedKeys={[window.location.href.split('#')[1]]}>
        {pagesLinks.map(item => menuItem(item.key, item.key, item.label))}
    </Menu>
};

export default Navbar;