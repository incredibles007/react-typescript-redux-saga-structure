import { IRootState } from '../../models';
import { analysesState } from './analyses.state';
import { libraryAssetsState } from './library-assets.state';
import { projectState } from './project.state';
import { uiState } from './ui.state';
import { unitsState } from './units.state';
import { userState } from './user.state';
import { usersState } from './users.state';

const rootState: IRootState = {
    analysesState,
    libraryAssetsState,
    projectState,
    uiState,
    unitsState,
    userState,
    usersState,
};

export default rootState;
