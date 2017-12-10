import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

import Example from './container/Example';

const App = () => {
    return (
        <Example />
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
