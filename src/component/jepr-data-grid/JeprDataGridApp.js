import React from 'react';
import PropTypes from 'prop-types';




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