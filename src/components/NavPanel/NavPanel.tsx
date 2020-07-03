import React from 'react'
import { Dashboard } from '@material-ui/icons'
import './NavPanel.css';
import { NavLink } from 'react-router-dom'

interface NavBarProps{
    header: string,
    children?: any
}

interface NavElementProps {
    link?: string,
    children?: any
}
const Navbar = (props: NavBarProps) => {
    return (
        <div className="sidebar">
            <header>{props.header}</header>
            {props.children}
        </div>
    )
}

const NavElement = (props: NavElementProps) => {
    const classes: string[] = [];
    const { link, children } = props;
    return (
            <NavLink to={link ? link : '#'} exact>
                <Dashboard />
                <span>{children}</span>
            </NavLink>
    )
}

export { Navbar, NavElement };