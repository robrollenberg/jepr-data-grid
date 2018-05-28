import React from 'react';
import PropTypes from 'prop-types';

const DataHeaderColumn = (props) => {
    return (
      <th width={props.width}>
          { props.displayName }
      </th>
    );
};

DataHeaderColumn.defaultProps = {
    search: false,
    searchValue: '',
    width: 100,
};

DataHeaderColumn.propTypes = {
    columnName: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    search: PropTypes.bool,
    searchValue: PropTypes.string,
    width: PropTypes.number,
};

export default DataHeaderColumn;