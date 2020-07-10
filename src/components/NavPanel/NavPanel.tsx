import React from 'react'
import { Dashboard } from '@material-ui/icons'
import './NavPanel.css';
import { NavLink } from 'react-router-dom'

interface NavBarProps {
    header: string,
    children?: any,
}

const Navbar = (props: NavBarProps) => {
    return (
        <div className="sidebar">
            <header>{props.header}</header>
            <div className="sidebar-links">{props.children}</div>
        </div>
    )
}


interface NavElementProps {
    link: string,
    children: string
    onClick?: any
}

const NavElement = (props: NavElementProps) => {
    const { link, children, onClick } = props;
    return (
        <NavLink to={link} exact onClick={onClick}>
            <Dashboard />
            <span>{children}</span>
        </NavLink>
    )
}

export { Navbar, NavElement };