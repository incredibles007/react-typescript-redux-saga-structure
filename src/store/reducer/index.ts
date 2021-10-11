import { Reducer, combineReducers } from 'redux';

import { IAction } from '../../models';
import { analysesReducer } from './analyses.reducer';
import { libraryAssetsReducer } from './library-assets.reducer';
import { projectReducer } from './project.reducer';
import { uiReducer } from './ui.reducer';
import { unitsReducer } from './units.reducer';
import { userReducer } from './user.reducer';
import { usersReducer } from './users.reducer';

export function createReducer<S>(initialState: S, handlers: any): Reducer<S> {
    const r = (state: S = initialState, action: IAction<S>): S => {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };

    return r as Reducer<S>;
}

const rootReducer = () =>
    combineReducers({
        analysesState: analysesReducer,
        libraryAssetsState: libraryAssetsReducer,
        projectState: projectReducer,
        uiState: uiReducer,
        unitsState: unitsReducer,
        userState: userReducer,
        usersState: usersReducer,
    });

export default rootReducer();
