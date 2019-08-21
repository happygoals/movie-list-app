import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM : Rendered of the content of the React library on a website
// ReactDOM renders one component inside of the document that has an element with the id of root
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
