import React from 'react';

import DataGridFilter from './DataGridFilter';

const DataGridHead = props => {
    const filter = props.columnMetaData.map((item) => {
        const searchField = item.props.columnName;
        const searchValue = item.props.searchValue || '';

        return { [searchField]: searchValue }
    });

    return (
        <thead>
            <tr>
                {props.columnMetaData}
            </tr>
            <DataGridFilter filter={filter} />
        </thead>
    )
};

export default DataGridHead;