import { IAppUserViewModel, IUnitDimensionViewModel, IUnitViewModel } from '../models';

export const dataUtil = () => { };

export const emptyAppUserViewModel = () => {
    return Object.assign({
        appUserId: 0,
        externalId: '',
        email: '',
        firstName: '',
        lastName: '',
        isSuspended: false,
        isDeleted: false,
        createdBy: '',
        createdOn: '',
        modifiedBy: '',
        modifiedOn: '',
        userRoles: [],
        userGroups: [],
        avatarUrl: '',
        canModify: false,
    }) as IAppUserViewModel;
};

export const emptyUnitViewModel = () => {
    return Object.assign({
        unitId: '',
        name: '',
        unitDimensionId: '',
        transformCoefficientA: 0,
        transformCoefficientB: 0,
        unitDimension: null,
    }) as IUnitViewModel;
};

export const emptyUnitDimensionViewModel = () => {
    return Object.assign({
        unitDimensionId: '',
        name: '',
        expressionDemensionIdentifier: '',
        baseUnitId: '',
        baseUnit: emptyUnitViewModel(),
        dimensionUnits: [],
    }) as IUnitDimensionViewModel;
};