export default (columns) => {
    let columnSizes = {};

    columns.map((column) => {
        columnSizes = {
            ...columnSizes,
            [column.props.columnName]: column.props.width
        }
    });
    return columnSizes;
};