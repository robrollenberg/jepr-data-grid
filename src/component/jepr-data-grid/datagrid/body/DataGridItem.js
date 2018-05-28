import React from 'react';
import PropTypes from 'prop-types';

const DataGridItem = ({ row, item, columnWidths }) => {
    return (
        <td width={columnWidths[item.columnName]}>
            { row[item.columnName] }
        </td>
    )
};

DataGridItem.propTypes = {
    row: PropTypes.object,
    item: PropTypes.object,
};

export default DataGridItem;