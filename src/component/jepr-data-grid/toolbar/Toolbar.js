import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = ({ titleTable }) => {
    return (
        <div className="row">
            <div className="col-md-4">
                -- Buttons --
            </div>
            <div className="col-md-4"><h3 className="text-center table-title">{ titleTable }</h3></div>
            <div className="col-md-4" />
        </div>
    );
};

Toolbar.defaultProps = {
    titleTable: '',
};

Toolbar.propTypes = {
    titleTable: PropTypes.string,
};

export default Toolbar;