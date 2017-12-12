import React from 'react';

const DataGridHead = props => {
    return (
        <thead>
            <tr>
                {props.columnMetaData}
            </tr>
        </thead>
    )
};

export default DataGridHead;