import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { actions } from '../actions/Actions';

export interface State {
    name: string;
    email: string;
}

const initialState: State = {
    name: '',
    email: ''
};

export const reducer = reducerWithInitialState(initialState)
    .case(actions.updateName, (state, name) => {
        return Object.assign({}, state, { name });
    })
    .case(actions.updateEmail, (state, email) => {
        return Object.assign({}, state, { email });
    });
