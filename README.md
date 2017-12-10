# JeprData grid
Reusable data grid

## Options
Overview of the datagrid:

```
jeprDataGrid: {
    columnMetaData: [ 
        {
            columnName: '',
            displayName: '',
            filterValue: '', //(optional)
            filterAction: '', //(optional)
            sortValue: '', //(optional)
            sortAction: '', //(optional)
            clearAction: '', //(optional for filter and sort)
        },
    ],
    data: [],
    options: {
        customClass: {
            classTable: '', //Overrides standard bootstrap
            classTableAdditional: '',
            classHeader: '',
            classBody: '',
            classFooter: '',
        },
    },
    toolbar: {
        toolbarButtons: [
                {
                    buttonIcon: '',
                    buttonAction: '',
                },
            ],
         titleTable: '',
    }
    
}
