import React from 'react';

import DataGridFilterItem from './DataGridFilterItem';

const DataGridFilter = ({filter}) => {
    console.log(filter)
    return (
        <tr>
            { filter.map((item, index) => <DataGridFilterItem key={index} item={item} />) }
        </tr>
    )
};

export default DataGridFilter;