import React from 'react'
import { List, TextField, Crud, Resource, Create, TextInput, ReferenceField, Edit } from '../components'


const Index: React.FC = () => {
    const list1 = () => (<List listURL='https://jsonplaceholder.typicode.com/posts' id={0}>
        <TextField fieldName="id" />
        <ReferenceField foreignKey="userId" reference="users" primaryKey="id" label="User Name">
            <TextField fieldName="name" />
        </ReferenceField>
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
    const edit1 = () => (
        <Edit header="Posts" submitURL='https://jsonplaceholder.typicode.com/posts'>
            <TextInput fieldName="title" />
            <TextInput fieldName="body" />
        </Edit>
    )
    const edit2 = () => (
        <Edit header="Users" submitURL='https://jsonplaceholder.typicode.com/users'>
            <TextInput fieldName="name" />
        </Edit>
    )
    const create2 = () => (
        <Create header="Users" submitURL='https://jsonplaceholder.typicode.com/users'>
            <TextInput fieldName="name" />
        </Create>
    )
    return (
        <Crud>
            <Resource list={list1()} name="posts" create={create1()} edit={edit1()} />
            <Resource list={list2()} name="users" create={create2()} edit={edit2()} />
        </Crud>
    )
}


export default Index;