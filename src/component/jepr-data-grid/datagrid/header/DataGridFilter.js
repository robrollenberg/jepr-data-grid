import React, { Component } from 'react';

import DataGridFilterItem from './DataGridFilterItem';

class DataGridFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: [
                ...props.filter
            ],
            sendFilter: false,
        };
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            ...this.state,
            filter: this.state.filter.map((item) => { return Object.keys(item)[0] === name ? { [name]: value } : item }),
        });

        setTimeout(() => {
            this.setState({sendFilter: true});

            this.state.sendFilter && console.log(this.state.filter);
        }, 1200);
    };

    render() {
        return (
          <tr>
              { this.state.filter.map((item, index) => <DataGridFilterItem key={index} item={item} handleInputChange={this.handleInputChange} />) }
            </tr>
        );
    }
}

export default DataGridFilter;
