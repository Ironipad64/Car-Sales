import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// import reducer from './reducers/featureReducer';

import 'bulma/css/bulma.css';
import './styles.css';

// const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    // <Provider store={reducer}>
    <App />
    // </Provider>
    , rootElement);
