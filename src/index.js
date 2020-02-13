import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './less/main.less';

const title = 'React with Webpack and Babel React with Webpack and Babel';

ReactDOM.render(<App title={title}/>, document.getElementById('app'));