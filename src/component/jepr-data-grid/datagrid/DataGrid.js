import React, {Component} from 'react';
import PropTypes from 'prop-types';

import setColumnSizes from '../helpers/setColumnSizes';
import DataGridHeader from './header/DataGridHeader';
import DataGridBody from './body/DataGridBody';
import DataGridFooter from './footer/DataGridFooter';

class DataGrid extends Component {
    constructor(props){
      super(props);

        this.state = {
            columnWidths: setColumnSizes(props.children),
            active: undefined,
        };
    };

    render() {
        const { options, children: columnMetaData, actionButtons, data } = this.props;

        return (
            <div className={`${options.classTableAdditional}`}>
                <table className={`table table-hover table-striped table-bordered ${options.classTable}`}
                >
                    <DataGridHeader columnMetaData={columnMetaData} actionButtons={actionButtons} />
                    <DataGridBody data={data} columnMetaData={columnMetaData} columnWidths={this.state.columnWidths} actionButtons={actionButtons} />
                    {options.showFooter && <DataGridFooter/>}
                </table>
            </div>
        );
    }
}

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
