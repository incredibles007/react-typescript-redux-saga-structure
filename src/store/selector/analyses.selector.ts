import { createSelector } from 'reselect';

import { IAnalysesState, IRootState } from '../../models';

export const selectAnalysesState = (rootState: IRootState): IAnalysesState => {
    return rootState.analysesState;
};

export const selectAnalyses = createSelector(
    [selectAnalysesState],
    analysesState => {
        return analysesState.analyses;
    }
);
