import React from 'react';
import PropTypes from 'prop-types';

const DataRowActionButtons = props => (
    <td>
        { props.children }
    </td>
);

DataRowActionButtons.defaultProps = {
    options: {},
};

DataRowActionButtons.propTypes = {
    row: PropTypes.object.isRequired,
    columnMetaData: PropTypes.array.isRequired,
    options: PropTypes.object,
};

export default DataRowActionButtons;
