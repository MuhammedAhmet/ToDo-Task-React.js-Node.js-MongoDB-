import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
<Provider>
    <App />
</Provider>
,document.getElementById('root'));

