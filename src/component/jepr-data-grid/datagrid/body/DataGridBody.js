import React from 'react';
import PropTypes from 'prop-types';

import DataGridRow from './DataGridRow';

const DataGridBody = ({ columnMetaData, data, options, actionButtons, columnWidths }) => (
    <tbody>
        { data.map((row, index) => <DataGridRow key={index} row={row} columnMetaData={columnMetaData} columnWidths={columnWidths} actionButtons={actionButtons} />) }
    </tbody>
);

DataGridBody.defaultProps = {
    options: {},
};

DataGridBody.propTypes = {
    data: PropTypes.array.isRequired,
    columnMetaData: PropTypes.array.isRequired,
    options: PropTypes.object,
};

export default DataGridBody;
