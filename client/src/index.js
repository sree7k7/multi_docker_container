import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';

import registerServiceWorker from './registerserviceworker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
