import React, { FormEvent, useState } from 'react';
import './Create.css'
import { TextInput } from '../';
import Axios from 'axios';

interface CreateProps {
    header: string,
    submitURL: string,
    children: any
    
}

const Create: React.FC<CreateProps> = (props) => {
    const { header, submitURL, children } = props
    const [fieldValues, setFieldValues] = useState({})
    const onInputsChange = (inputName: string, value) => {
        setFieldValues({...fieldValues, [`${inputName}`]: value})
    }
    const newChildren = React.Children.map(children, child => React.cloneElement(child, {
        onChange: onInputsChange
    }))
    const submitHandler = (event: FormEvent) => {
        Axios.post(submitURL, fieldValues).then(res => console.log(res)).catch(err => console.error(err))
        event.preventDefault();
    }
    return (
        <div className="create-form">
            <form onSubmit={submitHandler}>
                <header>
                    <h2>{header}</h2>
                </header>
                {newChildren}
                <div className="row">
                    <input type="submit" value="Create" />
                </div>
            </form>
        </div>
    )
}

export default Create