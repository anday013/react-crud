import React, { FormEvent, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import './Edit.css'
import provider from '../../provider';
import Axios from 'axios'
interface EditProps {
    header: string,
    submitURL: string,
    listName?: string,
    unloadList?: any,
    children: any,
    match?: any
}

const Edit: React.FC<EditProps> = props => {
    const { header, submitURL, listName, unloadList, children } = props
    const [fieldValues, setFieldValues] = useState({})
    const [data, setData] = useState({});

    useEffect(() => {
        
    }, [])

    const onInputsChange = (inputName: string, value) => {
        setFieldValues({ ...fieldValues, [`${inputName}`]: value })
    }

    console.log('props', props)
    const newChildren = React.Children.map(children, child => {
        if (data)
            React.cloneElement(child, {
                ...child.props,
                value: data[child.props.fieldName],
                onChange: onInputsChange
            })
        else
            React.cloneElement(child, {
                ...child.props,
                onChange: onInputsChange
            })
    })
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
                    <input type="submit" value="Edit" />
                </div>
            </form>
        </div>
    )
}



const mapDispatchToProps = dispatch => ({
    unloadList: (listName) => dispatch({ type: actionTypes.UNLOAD, listName: listName })
})
export default connect(null, mapDispatchToProps)(Edit)