import React from 'react';

import DataGridFilter from './DataGridFilter';

const DataGridHead = props => {
    return (
        <thead>
            <tr>
                {props.columnMetaData}
            </tr>
            <DataGridFilter filter={props.columnMetaData} />
        </thead>
    )
};

export default DataGridHead;