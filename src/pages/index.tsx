import React from 'react'
import NavPanel from '../components/NavPanel'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
interface IndexProps {

}
const Index: React.FC = (props: IndexProps) => {
    return (
        <Router>
            <NavPanel.Navbar header="my menu">
                <NavPanel.NavElement link="/">Home</NavPanel.NavElement>
                <NavPanel.NavElement link='/menu'>Menu</NavPanel.NavElement>
                <NavPanel.NavElement link='/about'>About</NavPanel.NavElement>
            </NavPanel.Navbar>
            <Switch>
                <Route path="/" exact />
                <Route path="/about" />
            </Switch>
        </Router>
    )
}



export default Index;