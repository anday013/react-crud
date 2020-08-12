import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import provider from '../../provider'
import './List.css'
import { listType } from '../../store/stateTypes'
import { NavLink } from 'react-router-dom'

interface ListProps {
    listURL: string,
    id: number,
    children?: Array<any>,
    lists: Array<listType>,
    setListLoaded?: any,
    name?: string
}


const List: React.FC<ListProps> = props => {
    const { listURL, id, children, lists, setListLoaded, name } = props;
    useEffect(() => {
        provider.getOne(listURL, 1).then(({ data }) => console.log('getOne', data))
        if (!lists[id]?.listLoaded)
            provider.getList(listURL).then(res => {
                setListLoaded(name, res.data, id)
            })
    }, [])

    const renderHeaders = (headersArr) => {
        return <tr>
            {headersArr?.map((field, index) => {
                if (field.type.name === 'TextField')
                    return (
                        <td key={index}>{field.props.label || field.props.fieldName}</td>
                    )
                else if (field.type.name === 'ReferenceField')
                    return (
                        <td key={index}>{field.props.label || field.props.foreignKey}</td>
                    )
            })}
            {<td>Edit</td>}
        </tr>
    }

    const renderBody = (bodyArr, headersArr) => {
        const editButton = (name, id) => <td><NavLink to={`${name}/edit/${id}`} exact>Edit</NavLink></td>
        const updateFieldProps = (field, newProps) => React.cloneElement(field, {
            ...field.props,
            ...newProps
        })
        return bodyArr?.map((element, index) => {
            return (
                <tr key={index}>
                    {headersArr?.map((field, index2) => {
                        if (field.type.name === 'TextField')
                            return (
                                <td key={index2}>{updateFieldProps(field, { record: element })}</td>
                            )
                        else if (field.type.name === 'ReferenceField') {
                            return (
                                <td key={index2}>{updateFieldProps(field, {
                                    lists: lists,
                                    record: element
                                })}</td>
                            )
                        }
                    })}
                    {editButton(name, element['id'])}
                </tr>
            )
        })
    }
    return (
        <div className="list" style={{ overflowX: 'auto' }}>
            <table>
                <thead>
                    {renderHeaders(children)}
                </thead>
                <tbody>
                    {renderBody(lists[id]?.data, children)}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({
    lists: state.list.lists
})

const mapDispatchToProps = dispatch => ({
    setListLoaded: (name, data, id) => dispatch({ type: actionTypes.LOADED, listName: name, data: data, id: id }),
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
