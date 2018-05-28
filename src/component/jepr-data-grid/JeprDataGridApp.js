import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from './toolbar/Toolbar';
import DataGrid from './datagrid/DataGrid';

const JeprDataGridApp = ({data, options, toolbar, actionButtons, children: columnMetaData}) => {
    return (
        <div>
            <Toolbar {...toolbar} />
            <DataGrid data={data} options={options} actionButtons={actionButtons}>
                {columnMetaData}
            </DataGrid>
        </div>
    );
};

JeprDataGridApp.defaultProps = {
    options: {},
    toolbar: {},
};

JeprDataGridApp.propTypes = {
    data: PropTypes.array.isRequired,
};

export default JeprDataGridApp;