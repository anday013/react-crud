import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import provider from '../../provider'
import './List.css'

interface ListProps {
    listURL: string,
    id: number,
    children?: Array<any>,
    lists: Array<listInterface>,
    setListLoaded?: any,
}

interface listInterface {
    listLoaded: boolean,
    data: []
}

const List: React.FC<ListProps> = props => {
    const { listURL, id, children, lists, setListLoaded } = props;

    useEffect(() => {
        if (!lists[id]?.listLoaded)
            provider.getList(listURL).then(res => {
                setListLoaded(res.data, id)
            })
    }, [])

    const fieldChecker = (list: any, index: any) => {
        if (list[index] === undefined) {
            console.error(`${index} field could not be found in list:`, list)
            return ''
        }
        return list[index]
    }
    const renderHeaders = (headersArr) => {
        return headersArr?.map((field, index) => {
            if (field.type.name === 'TextField')
                return (
                    <td key={index}>{field.props.fieldName}</td>
                )
        })
    }

    const renderBody = (bodyArr, headersArr) => {
        return bodyArr?.map((element, index) => (
            <tr key={index}>
                {headersArr?.map((field, index2) => {
                    if (field.type.name === 'TextField')
                        return (
                            <td key={index2}>{fieldChecker(element, field.props.fieldName)}</td>
                        )
                })}
            </tr>
        ))
    }
    console.log(id)
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

const mapStateToProps = (state: any) => ({
    lists: state.list.lists
})

const mapDispatchToProps = (dispatch: any) => ({
    setListLoaded: (data, id) => dispatch({ type: actionTypes.LOADED, data: data, id: id }),
})

export default connect(mapStateToProps, mapDispatchToProps)(List);