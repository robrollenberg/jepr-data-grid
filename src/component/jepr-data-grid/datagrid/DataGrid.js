import React from 'react';

const DataGrid = props => {
    return (
        <table className="table table-condensed table-hover table-striped col-xs-12">
            {props.children}
        </table>
    )
};

export default DataGrid;