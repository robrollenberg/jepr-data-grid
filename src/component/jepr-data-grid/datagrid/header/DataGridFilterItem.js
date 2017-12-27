import React from 'react';
import PropTypes from 'prop-types';

const DataGridFilterItem = ({ item, handleInputChange }) => {
    const searchName = Object.keys(item)[0];
    const searchValue = item[searchName];

    return (
        <th>
            <input type="text" className="form-control input-sm" name={searchName} value={searchValue} onChange={handleInputChange} />
        </th>
    )
};

DataGridFilterItem.propTypes = {
    item: PropTypes.object,
    handleInputChange: PropTypes.func,
};

export default DataGridFilterItem;