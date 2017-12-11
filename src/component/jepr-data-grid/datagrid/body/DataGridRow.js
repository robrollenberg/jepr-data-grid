import React from 'react';
import PropTypes from 'prop-types';

import DataGridItem from './DataGridItem';

const DataGridRow = ({ columnMetaData, row, options }) => (
    <tr>
      { columnMetaData.map((item, index) => <DataGridItem key={index} item={item} row={row} />) }
    </tr>
);

DataGridRow.defaultProps = {
    options: {},
};

DataGridRow.propTypes = {
    row: PropTypes.object.isRequired,
    columnMetaData: PropTypes.array.isRequired,
    options: PropTypes.object,
};

export default DataGridRow;
