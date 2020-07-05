import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import provider from '../../provider'
import './List.css'

interface ListProps {
    listURL: string,
    children?: Array<any>,
    isLoaded?: boolean,
    data?: [],
    setListLoaded?: any
}

const List: React.FC<ListProps> = (props: ListProps) => {
    const { listURL, children, isLoaded, data, setListLoaded } = props;
    useEffect(() => {
        if (!isLoaded) {
            provider.getList(listURL).then(res => setListLoaded(res.data))
        }
    }, [])

    const fieldChecker = (list: any, index: any) => {
        if (list[index] === undefined) {
            console.error(`${index} field could not be found in list:`, list)
            return ''
        }
        return list[index]
    }
    return (
        <div className="list" style={{ overflowX: 'auto' }}>
            <table>
                <thead>
                    <tr>
                        {children?.map((field, index) => {
                            if (field.type.name === 'TextField')
                                return (
                                    <td key={index}>{field.props.fieldName}</td>
                                )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((element, index) => (
                        <tr key={index}>
                            {children?.map((field, index2) => {
                                if (field.type.name === 'TextField')
                                    return (
                                        <td key={index2}>{fieldChecker(element, field.props.fieldName)}</td>
                                    )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    isLoaded: state.list.listLoaded,
    data: state.list.data
})

const mapDispatchToProps = (dispatch: any) => ({
    setListLoaded: (data) => dispatch({ type: actionTypes.LOADED, data: data })
})

export default connect(mapStateToProps, mapDispatchToProps)(List);