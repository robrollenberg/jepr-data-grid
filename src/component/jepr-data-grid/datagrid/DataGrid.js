import React from 'react';
import PropTypes from 'prop-types';

import DataGridHeader from './header/DataGridHeader';
import DataGridBody from './body/DataGridBody';
import DataGridFooter from './footer/DataGridFooter';

const DataGrid = ({ columnMetaData, data, options }) => {
    const { classTable, classTableAdditional, showFooter } = options;

    return (
        <table className={`${classTable} ${classTableAdditional}`}>
            <DataGridHeader columnMetaData={columnMetaData} />
            <DataGridBody data={data} columnMetaData={columnMetaData} />

            {showFooter && <DataGridFooter /> }
        </table>
    );
};

DataGrid.defaultProps = {
    options: {},
    classTable: 'table table-condensed table-hover table-striped',
    classTableAdditional: '',
    showFooter: false,
};

DataGrid.propTypes = {
    data: PropTypes.array.isRequired,
    columnMetaData: PropTypes.array.isRequired,
    options: PropTypes.object,
    showFooter: PropTypes.bool,
    classTable: PropTypes.string,
    classTableAdditional: PropTypes.string,
};

export default DataGrid;
