import React from 'react'
import { List, TextField, Crud, Resource } from '../components'


const Index: React.FC = props => {
    return (
        <Crud>
            <Resource list={<List listURL='https://jsonplaceholder.typicode.com/posts' id={0}>
                <TextField fieldName="id" />
                <TextField fieldName="userId" />
                <TextField fieldName="title" />
                <TextField fieldName="body" />
            </List>} name="posts" />
            <Resource list={<List listURL='https://jsonplaceholder.typicode.com/users' id={1}>
                <TextField fieldName="id" />
                <TextField fieldName="name" />
                <TextField fieldName="username" />
                <TextField fieldName="email" />
            </List>} name="users" />
        </Crud>
    )
}


export default Index;