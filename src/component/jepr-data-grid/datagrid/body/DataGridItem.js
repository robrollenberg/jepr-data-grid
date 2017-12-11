import React from 'react';
import PropTypes from 'prop-types';

const DataGridItem = ({ row, item }) => {
    return (
        <td>
            { row[item.columnName] }
        </td>
    )
};

DataGridItem.propTypes = {
    row: PropTypes.object,
    item: PropTypes.object,
};

export default DataGridItem;