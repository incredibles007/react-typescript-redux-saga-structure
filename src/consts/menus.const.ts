import { IOverheadMenuItem } from '../models';

export const overheadMenuItems: Array<IOverheadMenuItem> = [
    {
        id: 'projects',
        title: 'Projects',
        href: '/projects',
    },
    {
        id: 'analyses',
        title: 'Analyses',
        href: '/analyses',
    },
    {
        id: 'configure',
        title: 'Configure',
        children: [
            {
                id: 'libraries',
                icon: require('../assets/images/svg-icons/ic_list.svg'),
                title: 'Libraries',
                href: '/configure/library-assets',
            },
            {
                id: 'units',
                icon: require('../assets/images/svg-icons/ic_units.svg'),
                title: 'Units',
                href: '/configure/units',
            },
        ],
    },
    {
        id: 'users',
        title: 'Users',
        href: '/users',
    },
];

export const overheadUserMenuItems: Array<IOverheadMenuItem> = [
    {
        id: 'profile',
        href: '/profile',
    },
    {
        id: 'logs',
        icon: require('../assets/images/svg-icons/ic_logs.svg'),
        title: 'Logs',
        href: '/logs',
    },
    {
        id: 'system-audit-log',
        icon: require('../assets/images/svg-icons/ic_audit.svg'),
        title: 'System Audit Log',
        href: '/system-audit-logs',
    },
    {
        id: 'log-out',
        icon: require('../assets/images/svg-icons/ic_logout.svg'),
        title: 'Log Out',
    },
];
