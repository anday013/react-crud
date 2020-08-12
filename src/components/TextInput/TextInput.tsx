import React from 'react';
import './TextInput.css'
interface TextInputProps {
    fieldName: string,
    label?: string,
    onChange?: any,
    value?: any
}

const TextInput: React.FC<TextInputProps> = (props) => {
    const { fieldName, label, onChange, value } = props
    const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)
    return (
        <div className="form-data">
            <div className="col-25">
                <label htmlFor={fieldName}>{label ? label : fieldName}:</label>
            </div>
            <div className="col-75">
                <input
                    type="text"
                    id={fieldName}
                    placeholder={label ? capitalize(label) + '...' : capitalize(fieldName) + '...'}
                    onChange={(event) => onChange(fieldName, event.target.value)}
                    value={value}
                />
            </div>
        </div>
    )
}

export default TextInput