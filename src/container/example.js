import React from 'react';

import JeprDataGridApp from '../component/jepr-data-grid/JeprDataGridApp';
import DataHeaderColumn from '../component/jepr-data-grid/DataHeaderColumn';

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
        <JeprDataGridApp {...jeprDataGrid}>
            <DataHeaderColumn columnName={'firstName'} displayName={'Voornaam'} />
            <DataHeaderColumn columnName={'lastName'} displayName={'Achternaam'} />
            <DataHeaderColumn columnName={'city'} displayName={'Woonplaats'} />
            <DataHeaderColumn columnName={'age'} displayName={'Leeftijd'} />
        </JeprDataGridApp>
    );
};

export default Example;
