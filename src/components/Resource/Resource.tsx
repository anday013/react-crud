import React from 'react';
import { NavPanel } from '../'

interface ResourceProps {
    name: string,
    route?: string,
    list: React.ReactNode,
    create?: React.ReactNode


}

const Resource:React.FC<ResourceProps> = ({ name, route }) => {
    return (
        <NavPanel.NavElement link={route ? route : `/${name}`}>{name}</NavPanel.NavElement>
    )
}

export default Resource