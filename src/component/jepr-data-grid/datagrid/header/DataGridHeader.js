import React from 'react';

import DataGridFilter from './DataGridFilter';

const DataGridHead = (props) => {

    const filter = props.columnMetaData.map((item) => {
        if(!item.props.search) return;

        const searchField = item.props.columnName;
        const searchValue = item.props.searchValue || '';

        return {[searchField]: searchValue};
    });

    return (
        <thead>
            <tr>
                {props.columnMetaData}
                {
                    //If actionButtons is set show the buttons
                    props.actionButtons.length > 0 &&
                    <th width="50">
                        Acties
                    </th>
                }

            </tr>
            {
                filter.length > 0 &&
                <DataGridFilter filter={filter} />
            }

        </thead>
    );
};

export default DataGridHead;
