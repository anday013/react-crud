import React from 'react'
import { List, TextField, Crud, Resource, Create, TextInput } from '../components'


const Index: React.FC = () => {
    const list1 = () => (<List listURL='https://jsonplaceholder.typicode.com/posts' id={0}>
        <TextField fieldName="id" />
        <TextField fieldName="userId" />
        <TextField fieldName="title" />
        <TextField fieldName="body" />
    </List>)
    const list2 = () => (<List listURL='https://jsonplaceholder.typicode.com/users' id={1}>
        <TextField fieldName="id" />
        <TextField fieldName="name" />
        <TextField fieldName="username" />
        <TextField fieldName="email" />
    </List>)

    const create1 = () => (
        <Create header="Posts" submitURL='https://jsonplaceholder.typicode.com/posts'>
            <TextInput fieldName="title" />
            <TextInput fieldName="body" />
        </Create>
    )
    const create2 = () => (
        <Create header="Users" submitURL='https://jsonplaceholder.typicode.com/users'>
            <TextInput fieldName="name" />
        </Create>
    )
    return (
        <Crud>
            <Resource list={list1()} name="posts" create={create1()}/>
            <Resource list={list2()} name="users" create={create2()} />
        </Crud>
    )
}


export default Index;