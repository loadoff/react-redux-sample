import { createStore, combineReducers } from 'redux';
import { reducer, State } from './states/States';

export type AppState = {
    state: State
}

const store = createStore(
    combineReducers<AppState>({
        state: reducer
    })
);

export default store;
