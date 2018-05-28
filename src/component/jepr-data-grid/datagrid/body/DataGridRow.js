import React from 'react';
import PropTypes from 'prop-types';

import DataGridItem from './DataGridItem';
import DataGridRowActionButton from './DataGridRowActionButton';

const DataGridRow = ({ columnMetaData, row, options, actionButtons, columnWidths }) => (
        <tr>
            { columnMetaData.map((item, index) => <DataGridItem key={index} item={item.props} row={row} columnWidths={columnWidths} />) }
            {
                //If actionButtons is set show the buttons
                actionButtons.length > 0 &&
                <td width="50">
                    { actionButtons.map((actionButton, index) => <DataGridRowActionButton key={index} className={actionButton.button} id={row.id} action={actionButton.action}/>) }
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
