import React from 'react';
import PropTypes from 'prop-types';

import DataGridItem from './DataGridItem';

const DataGridRow = ({ columnMetaData, row, options, actionButtons }) => (
        <tr>
            { columnMetaData.map((item, index) => <DataGridItem key={index} item={item.props} row={row} />) }
            {
                //If actionButtons is set show the buttons
                actionButtons.length > 0 &&
                <td>
                    { actionButtons.map((actionButton) => <span className={actionButton.button} onClick={() => actionButton.action(row.id)}>&nbsp;</span>) }
                </td>
            }

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
