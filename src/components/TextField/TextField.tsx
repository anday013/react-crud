import React from 'react'

interface TextFieldProps {
    fieldName: string,
    label?: string,
    record?: any,
}
const TextField: React.FC<TextFieldProps> = ({ fieldName, record = {} }) => {
    const fieldChecker = (list: any, index: any) => {
        if (list[index] === undefined) {
            console.error(`${index} field could not be found in list:`, list)
            return ''
        }
        return list[index]
    }
    return (
        <span>{fieldChecker(record, fieldName)}</span>
    )
}

export default TextField