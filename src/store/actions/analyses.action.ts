import { EAnalysesActionTypes } from '../../enums';

export const getAllAnalyses = () => {
    return {
        type: EAnalysesActionTypes.GET_ALL_ANALYSES,
    };
};

export const getAllAnalysesSuccess = (payload: any[]) => {
    return {
        type: EAnalysesActionTypes.GET_ALL_ANALYSES_SUCCESS,
        payload,
    };
};

export const getAllAnalysesSuccessFailed = (payload: any) => {
    return {
        type: EAnalysesActionTypes.GET_ALL_ANALYSES_FAILED,
        payload,
    };
};
