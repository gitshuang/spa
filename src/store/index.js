import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers, { initialState } from './reducers';

let enhancer = applyMiddleware(thunk);


let store = createStore(
    reducers,
    initialState,
    enhancer
);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer)
        })
    }
}

export default store;
