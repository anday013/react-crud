import React from 'react';
import { NavPanel, Create } from '../'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

interface CrudProps {
    children?: any
}

const Crud: React.FC<CrudProps> = props => {
    const NavPanelSize = 220;

    const NavMenu = (elements) => (
        <NavPanel.Navbar header="my menu">
            <NavPanel.NavElement link="/">Dashboard</NavPanel.NavElement>
            {elements}
            <NavPanel.NavElement link='/about'>About</NavPanel.NavElement>
            <NavPanel.NavElement link='/post/create'>Create</NavPanel.NavElement>
        </NavPanel.Navbar>
    )

    const ResourceRender = (resources) => (
        resources?.map((res, index) => {
            const { name, path, list } = res.props
            return (
                <Route key={index} path={path ? path : `/${name}`}>
                    {list}
                </Route>
            )
        })
    )
    return (
        <Router>
            {NavMenu(props.children)}
            <div style={{ marginLeft: NavPanelSize }}>
                <Switch>
                    <Route path="/" exact />
                    {ResourceRender(props.children)}
                    <Route path="/about" />
                    <Route path="/post/create" exact><Create /></Route>
                </Switch>
            </div>
        </Router>
    )
}


export default Crud