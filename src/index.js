import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App";
import * as serviceWorker from './serviceWorker';


// A react component is a function that returns a react element.
// PascalCase is the naming convention for react components.
// Components whose names does not begin with a capital letter,
// will be interpretted as a plain HTML tag.



// AswerDetails Compnent






ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
