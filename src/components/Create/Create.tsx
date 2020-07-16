import React, { FormEvent, useState } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import './Create.css'
import Axios from 'axios';

interface CreateProps {
    header: string,
    submitURL: string,
    listName?: string,
    unloadList?: any,
    children: any

}

const Create: React.FC<CreateProps> = (props) => {
    const { header, submitURL,listName, unloadList, children } = props
    const [fieldValues, setFieldValues] = useState({})
    const onInputsChange = (inputName: string, value) => {
        setFieldValues({ ...fieldValues, [`${inputName}`]: value })
    }
    const newChildren = React.Children.map(children, child => React.cloneElement(child, {
        onChange: onInputsChange
    }))
    const submitHandler = (event: FormEvent) => {
        Axios.post(submitURL, fieldValues)
            .then(res => unloadList(listName))
            .catch(err => console.error(err))
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



const mapDispatchToProps = dispatch => ({
    unloadList: (listName) => dispatch({ type: actionTypes.UNLOAD, listName: listName })
})
export default connect(null, mapDispatchToProps)(Create)