import React from 'react';
import PropTypes from 'prop-types';

// data = []
// -- flat data input
// columnMetaData []
// -- columnName
// -- displayName
// -- filterValue (optional)
// -- filterAction (optional)
// -- sortValue (optional)
// -- sortAction (optional)
// -- clearAction (optional for filter and sort)
// toolbarActions
// -- button icon
// -- button action
// dataGridConfig
// -- classTable
// -- classHeader
// -- classBody
// -- classFooter


const JeprDataGridApp = () => {
    return (
        <div>
            <div> --- Toolbar --- </div>
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
    type: 'checkbox',
};

JeprDataGridApp.propTypes = {
    label: PropTypes.string.isRequired,
};

export default JeprDataGridApp;