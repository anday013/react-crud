import React from 'react'

interface TextFieldProps {
    fieldName: string
}
const TextField = (props: TextFieldProps) => (
    <p>{props.fieldName}</p>
)

export default TextField