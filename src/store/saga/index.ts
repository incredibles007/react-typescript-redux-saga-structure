import { all, fork, put } from 'redux-saga/effects';

import analysesSaga from './analyses.saga';
import libraryAssetsSaga from './library-assets.saga';
import projectSaga from './project.saga';
import userSaga from './user.saga';
import unitsSaga from './units.saga';
import usersSaga from './users.saga';
import { EBasicActionTypes } from '../../enums';

export default function* root() {
    yield all([
        fork(analysesSaga),
        fork(libraryAssetsSaga),
        fork(projectSaga),
        fork(unitsSaga),
        fork(userSaga),
        fork(usersSaga),
    ]);
    yield put({
        type: EBasicActionTypes.INIT_STORE,
    });
}
