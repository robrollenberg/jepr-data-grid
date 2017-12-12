import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from './toolbar/Toolbar';
import DataGrid from './datagrid/DataGrid';

const JeprDataGridApp = ({data, options, toolbar, children}) => {
    return (
        <div>
            <Toolbar {...toolbar} />
            <DataGrid data={data} options={options}>
                {children}
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