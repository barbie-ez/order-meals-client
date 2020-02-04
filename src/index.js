import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import * as serviceWorker from './serviceWorker';

import './styles/layout.scss';

ReactDOM.render(
    <Layout />, document.getElementById('root'));


serviceWorker.unregister();
