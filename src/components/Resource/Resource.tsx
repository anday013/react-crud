import React from 'react';
import { NavPanel } from '../'

interface ResourceProps {
    name: string,
    path?: string,
    list: React.ReactNode


}

const Resource = (props: ResourceProps) => {
    const { name, path } = props;
    return (
        <NavPanel.NavElement link={path ? path : `/${name}`}>{name}</NavPanel.NavElement>
    )
}

export default Resource