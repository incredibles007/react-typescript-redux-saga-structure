import {
    IAppRole,
    IBvn,
    INodeClass,
    ISetting,
    IUserSharedProject,
} from './project.model';

export interface IAppUser {
    appUserId: number;
    avatarUrl?: string;
    externalId?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    isSuspended: boolean;
    isDeleted: boolean;
    hash?: string;
    fullName?: string;
    nodeClasses: Array<INodeClass>;
    userRoles: Array<IAppUserRole>;
    userGroups: Array<IUserGroupUser>;
    sharedProjects: Array<IUserSharedProject>;
    settings: Array<IAppUserSetting>;
    ownedBusinessVariables: Array<IBvn>;
    createdById: number;
    createdOn: string;
    modifiedById: number;
    modifiedOn?: string;
    createdBy?: string;
    modifiedBy?: string;
}

export interface IAppUserRole {
    appUserId: number;
    appUser: any;
    roleId: number;
    role: IAppRole;
}

export interface IAppUserSetting {
    appUserId: number;
    appUser: any;
    settingId: number;
    setting: ISetting;
    settingValue?: string;
}

export interface IAppUserViewModel {
    appUserId: number;
    externalId?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    isSuspended: boolean;
    isDeleted: boolean;
    createdBy?: string;
    createdOn: string;
    modifiedBy?: string;
    modifiedOn?: string;
    userRoles: Array<IRoleViewModel>;
    userGroups: Array<IUserGroupViewModel>;
    avatarUrl?: string;
    canModify: boolean;
}

export interface IBvnSharedUser {
    bvnId: string;
    bvn: any;
    appUserId: number;
    user: any;
}

export interface IBvnSharedUserGroup {
    bvnId: string;
    bvn: any;
    userGroupId: number;
    userGroup: IUserGroup;
}

export interface ILoginUser {
    email: string;
    password: string;
}

export interface IRoleViewModel {
    roleId: number;
    name?: string;
    roleUsers: Array<any>;
}

export interface IUser {
    avatarUrl?: string;
    email: string;
    fullName: string;
    password: string;
    userId: number;
}

export interface IUserGroup {
    userGroupId: number;
    name?: string;
    description?: string;
    userGroupRoles: Array<IUserGroupRole>;
    userGroupUsers: Array<any>;
}

export interface IUserGroupRole {
    userGroupId: number;
    userGroup: any;
    roleId: number;
    role: any;
}

export interface IUserGroupUser {
    userGroupId: number;
    userGroup: IUserGroup;
    userId: number;
    user: any;
}

export interface IUserGroupViewModel {
    userGroupId: number;
    name?: string;
    description?: string;
    userGroupRoleIds: Array<number>;
    userGroupUserIds: Array<number>;
}
