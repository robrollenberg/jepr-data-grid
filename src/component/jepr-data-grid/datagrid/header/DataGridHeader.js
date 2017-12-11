import React from 'react';

const DataGridHead = props => {
    return (
        <thead>
            {props.children}
        </thead>
    )
};

export default DataGridHead;