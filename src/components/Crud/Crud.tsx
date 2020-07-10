import React from 'react';
import { NavPanel, Create } from '../'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import "./Crud.css"

interface CrudProps {
    children?: any
}

const Crud: React.FC<CrudProps> = props => {

    const NavMenu = (elements) => (
        <NavPanel.Navbar header="my menu">
            <NavPanel.NavElement link="/">Dashboard</NavPanel.NavElement>
            {elements}
            <NavPanel.NavElement link='/about'>About</NavPanel.NavElement>
            <NavPanel.NavElement link='/posts/create'>Create</NavPanel.NavElement>
        </NavPanel.Navbar>
    )

    const renderCreatesRoute = resources => (
        resources?.map((res, index) => {
            const { name, create } = res.props
            if (create)
                return (
                    <Route key={index} path={`/${name}/create`} exact>
                        {create}
                    </Route>
                )
        })
    )
    const renderListsRoute = resources => (
            resources?.map((res, index) => {
                const { name, route, list, create } = res.props
                return (
                    <Route key={index} path={route ? route : `/${name}`} exact>
                        {list}
                    </Route>
                )
            })
        )
return (
    <Router>
        {NavMenu(props.children)}
        <div className="container">
            <Switch>
                <Route path="/" exact />
                {renderListsRoute(props.children)}
                {renderCreatesRoute(props.children)}
                <Route path="/about" />
            </Switch>
        </div>
    </Router>
)
}


export default Crud