import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import cartReducer from './reducers/cart.reducer';
import productReducer from './reducers/product.reducer';
import categoryReducer from './reducers/category.reducer';
import {loadState, saveState} from '../helpers/local-storage';
import throttle from 'lodash/throttle';

const configureStore = () => {
    const persistedState = loadState();

    const rootReducer = combineReducers({
        cart: cartReducer,
        product: productReducer,
        category: categoryReducer
    });

    const store = createStore(rootReducer, persistedState, applyMiddleware(thunk, logger));

    store.subscribe(throttle(() => {

        saveState({
            cart: {items: store.getState().cart.items}
        });
    }, 500));

    return store;
};

export default configureStore;