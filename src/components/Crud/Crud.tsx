import React, { useEffect } from 'react';
import { NavPanel } from '../'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import "./Crud.css"

interface CrudProps {
    children?: any,
    setNumberOfLists?: any
}

const Crud: React.FC<CrudProps> = props => {
    
    useEffect(() => {
        props.setNumberOfLists(React.Children.count(props.children))
    }, [])

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
                        {React.cloneElement(create, {
                            ...create.props,
                            listName: name
                        })}
                    </Route>
                )
        })
    )
    const renderListsRoute = resources => (
        resources?.map((res, index) => {
            const { name, route, list } = res.props
            return (
                <Route key={index} path={route ? route : `/${name}`} exact>
                    {React.cloneElement(list, {
                        ...list.props,
                        name: name
                    })}
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

const mapDispatchToProps = (dispatch: any) => ({
    setNumberOfLists: (number) => dispatch({ type: actionTypes.SET_NUMBER_OF_LISTS, numberOfLists: number })
})
export default connect(null, mapDispatchToProps)(Crud)