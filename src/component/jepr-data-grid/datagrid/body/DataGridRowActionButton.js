import React from 'react';
import PropTypes from 'prop-types';

const DataGridRowActionButton = ({className, id, action}) => (
  <span className={className} onClick={() => action(id)} role="button">&nbsp;</span>
);

DataGridRowActionButton.propTypes = {
    className: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    action: PropTypes.func.isRequired,
};

export default DataGridRowActionButton;
