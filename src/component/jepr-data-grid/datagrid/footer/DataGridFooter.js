import React from 'react';

const DataGridFoot = props => {
    return (
        <tfoot>
            {props.children}
        </tfoot>
    )
};

export default DataGridFoot;