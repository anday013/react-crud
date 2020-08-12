import React from 'react';
import { listType } from '../../store/stateTypes'

interface ReferenceFieldProps {
    foreignKey: string,
    primaryKey: string,
    reference: string,
    label?: string,
    lists?: Array<listType>,
    children: any,
    record?: any,
}

const ReferenceField: React.FC<ReferenceFieldProps> = props => {
    const { foreignKey, primaryKey, reference, lists, children, record } = props;
    const result = lists?.find((list) => list.listName === reference)?.data.find(row => row[primaryKey] === record[foreignKey])
    if(!result)
        return React.cloneElement(children, { ...children.props,fieldName: foreignKey ,record: record })
    return React.cloneElement(children, { ...children.props, record: result })
}

export default ReferenceField;