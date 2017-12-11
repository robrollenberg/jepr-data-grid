import React from 'react';

import JeprDataGridApp from '../component/jepr-data-grid/JeprDataGridApp';

const Example = () => {
    const data = [
        {
            id: 1,
            firstName: 'Rob',
            lastName: 'Rollenberg',
            age: 36,
            city: 'Sint Pancras',
        },
        {
            id: 2,
            firstName: 'Noortje',
            lastName: 'Janssen',
            age: 37,
            city: 'Alkmaar',
        },
        {
            id: 3,
            firstName: 'Julia',
            lastName: 'Jasper',
            age: 9,
            city: 'Sint Pancras',
        },
    ];

    const jeprDataGrid = {
        columnMetaData: [
            {
                columnName: 'firstName',
                displayName: 'Voornaam',
            },
            {
                columnName: 'city',
                displayName: 'Woonplaats',
            },
            {
                columnName: 'age',
                displayName: 'Leeftijd',
            },
        ],
        data,
        options: {
            showFooter: false,
            classTableAdditional: "col-md-10 col-md-offset-2",
        },
        toolbar: {
            toolbarButtons: [
                {
                    buttonIcon: '',
                    buttonAction: '',
                },
            ],
            titleTable: 'Example grid',
        },
    };

    return (
        <JeprDataGridApp {...jeprDataGrid} />
    );
};

export default Example;
