import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DataGridHeader from './header/DataGridHeader';
import DataGridBody from './body/DataGridBody';
import DataGridFooter from './footer/DataGridFooter';

class DataGrid extends Component {

    render() {
        return (
            <div className={`${this.props.options.classTableAdditional}`}>
                <table className={`table table-condensed table-hover table-striped ${this.props.options.classTable}`}>
                    <DataGridHeader columnMetaData={this.props.children} />

                    <DataGridBody data={this.props.data} columnMetaData={this.props.children} />

                    {this.props.options.showFooter && <DataGridFooter /> }
                </table>
            </div>
        );
    }
};

DataGrid.defaultProps = {
    options: {
        classTable: 'table table-condensed table-hover table-striped',
        classTableAdditional: '',
        showFooter: false,
    },
};

DataGrid.propTypes = {
    data: PropTypes.array.isRequired,
    options: PropTypes.shape({
        showFooter: PropTypes.bool,
        classTable: PropTypes.string,
        classTableAdditional: PropTypes.string,
    }),
};

export default DataGrid;
