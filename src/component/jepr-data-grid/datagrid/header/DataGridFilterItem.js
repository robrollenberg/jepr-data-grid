import React from 'react';
import PropTypes from 'prop-types';

const DataGridFilterItem = ({ item }) => {
    const searchField = item.props.columnName;
    const searchValue = item.props.searchValue;
    return (
        <th>
            <input type="text" className="form-control input-sm" name={searchField} value={searchValue} onChange={() => {}} />
        </th>
    )
};

DataGridFilterItem.propTypes = {
    item: PropTypes.object,
};

export default DataGridFilterItem;