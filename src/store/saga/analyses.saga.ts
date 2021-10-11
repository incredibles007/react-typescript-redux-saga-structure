import { all, call, put, takeLatest } from 'redux-saga/effects';

import { EAnalysesActionTypes } from '../../enums';
import { analysesService } from '../../services';
import * as fromAnalysesAction from '../actions/analyses.action';
import * as fromUserAction from '../actions/user.action';

export function* watchGetAllAnalyses(action: { type: string }) {
    try {
        const { data } = yield call(analysesService.resultProjectAnalysesApi);
        yield put(fromAnalysesAction.getAllAnalysesSuccess(data));
    } catch (error) {
        if (
            error.response.status === 401 &&
            error.response.statusText === 'Unauthorized'
        ) {
            yield put(fromUserAction.refreshToken(action));
        }
    }
}

export default function* root() {
    yield all([
        takeLatest(
            EAnalysesActionTypes.GET_ALL_ANALYSES as any,
            watchGetAllAnalyses
        ),
    ]);
}
