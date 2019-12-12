import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../Store'
import { actions } from '../actions/Actions';
import { Home } from '../pages/Home';

export interface Actions {
    updateName: (v: string) => Action<string>;
    updateEmail: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
    return {
        updateName: (v: string) => dispatch(actions.updateName(v)),
        updateEmail: (v: string) => dispatch(actions.updateEmail(v))
    };
}

function mapStateToProps(appState: AppState) {
    return Object.assign({}, appState.state);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
