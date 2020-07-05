import React from 'react'
import NavPanel from '../components/NavPanel'
import List from '../components/List'
import TextField from '../components/TextField'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
interface IndexProps {
}
const Index: React.FC<IndexProps> = props => {
    console.log(props)
    return (
        <Router>
            <NavPanel.Navbar header="my menu">
                <NavPanel.NavElement link="/">Dashboard</NavPanel.NavElement>
                <NavPanel.NavElement link='/posts'>Posts</NavPanel.NavElement>
                <NavPanel.NavElement link='/about'>About</NavPanel.NavElement>
            </NavPanel.Navbar>
            <Switch>
                <Route path="/" exact />
                <Route path="/posts" >
                    <List listURL='https://jsonplaceholder.typicode.com/posts'>
                        <TextField fieldName="id" />
                        <TextField fieldName="userId" />
                        <TextField fieldName="title" />
                        <TextField fieldName="body" />
                    </List>
                </Route>
                <Route path="/about" />
            </Switch>
        </Router>
    )
}


export default Index;