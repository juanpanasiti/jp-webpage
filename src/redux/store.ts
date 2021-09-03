import { createStore, combineReducers, compose, CombinedState, Reducer, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { RootState } from '../interfaces/redux-interfaces/rootState';
import { langReducer } from './reducers/langReducer';

const rootReducer: Reducer<CombinedState<RootState>, any> = combineReducers({
    lang: langReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
