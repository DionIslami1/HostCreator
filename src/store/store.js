import { createStore, compose } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(
    rootReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION___
            ? window.__REDUX_DEVTOOLS_EXTENSION___()
            : (f) => f
    )
);


export default store
