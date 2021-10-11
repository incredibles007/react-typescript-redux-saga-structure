import { createReducer } from '.';
import { IAnalysesState } from '../../models';
import { analysesActionTypes } from '../../consts';
import { analysesState } from '../states/analyses.state';

export const analysesReducer = createReducer<IAnalysesState>(analysesState, {
    [analysesActionTypes.GET_ALL_ANALYSES_SUCCESS]: getAllAnalysesSuccess,
});

function getAllAnalysesSuccess(state: IAnalysesState, { payload }: any) {
    return {
        ...state,
        analyses: payload,
    };
}
