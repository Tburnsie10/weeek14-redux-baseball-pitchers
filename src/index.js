import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';


const pitchers = (state = [], action) => {
    if(action.type === 'ADD-PITCHER') {
        state = [...state, action.payload]
    } 
    return state;
}

const catchers = (state = [], action) => {
    if(action.type === 'ADD-CATCHER') {
        state = [...state, action.payload]
    } 
    return state;
}



// The store only accepts one reducer
const storeInstance = createStore(
    combineReducers(
        {
            pitchers, 
            catchers,

        }

    ),

    applyMiddleware(logger)
);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);


