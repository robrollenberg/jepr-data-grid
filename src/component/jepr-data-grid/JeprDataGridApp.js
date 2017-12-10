import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from './toolbar/Toolbar';

const JeprDataGridApp = ({columnMetaData, data, options, toolbar}) => {
    return (
        <div>
            <Toolbar {...toolbar} />
            <div>
                --- Table ---
                <div> -- Titles -- </div>
                <div> -- Filter -- </div>
                <div> -- Rows -- </div>
                <div> -- Footer -- </div>
            </div>

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