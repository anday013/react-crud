import React from 'react';
import './Create.css'

interface CreateProps {

}

const Create:React.FC<CreateProps> = props => {
    return(
        <div className="create-form">
            <form>
                <input type="text"/>
            </form>
        </div>
    )
}

export default Create