import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from './toolbar/Toolbar';
import DataGrid from './datagrid/DataGrid';

const JeprDataGridApp = ({columnMetaData, data, options, toolbar}) => {
    return (
        <div>
            <Toolbar {...toolbar} />
            <DataGrid columnMetaData={columnMetaData} data={data} options={options} />
        </div>
    );
};

JeprDataGridApp.defaultProps = {
    options: {},
    toolbar: {},
};

JeprDataGridApp.propTypes = {
    columnMetaData: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
};

export default JeprDataGridApp;