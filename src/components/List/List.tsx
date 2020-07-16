import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import provider from '../../provider'
import './List.css'
import { listType } from '../../store/stateTypes'

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
        if (!lists[id]?.listLoaded)
            provider.getList(listURL).then(res => {
                setListLoaded(name, res.data, id)
            })
    }, [])

    const renderHeaders = (headersArr) => {
        return headersArr?.map((field, index) => {
            if (field.type.name === 'TextField')
                return (
                    <td key={index}>{field.props.label || field.props.fieldName}</td>
                )
            else if(field.type.name === 'ReferenceField') 
                return (
                <td key={index}>{field.props.label || field.props.foreignKey}</td> 
                )
        })
    }

    const renderBody = (bodyArr, headersArr) => {
        return bodyArr?.map((element, index) => (
            <tr key={index}>
                {headersArr?.map((field, index2) => {
                    if (field.type.name === 'TextField')
                        return (
                            <td key={index2}>{React.cloneElement(field, { ...field.props, record: element })}</td>
                        )
                    else if (field.type.name === 'ReferenceField') {
                        return (
                            <td key={index2}>{React.cloneElement(field, {
                                ...field.props,
                                lists: lists,
                                record: element
                            })}</td>
                        )
                    }
                })}
            </tr>
        ))
    }
    console.log('children', children)
    return (
        <div className="list" style={{ overflowX: 'auto' }}>
            <table>
                <thead>
                    <tr>
                        {renderHeaders(children)}
                    </tr>
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
