export const graphShareDropdown = {
    icon: require('../assets/images/svg-icons/ic_share.svg'),
    title: 'Share',
};

export const graphSaveDropdown = {
    icon: require('../assets/images/svg-icons/ic_save.svg'),
    title: 'Save',
};

export const graphRunDropdown = {
    icon: require('../assets/images/svg-icons/ic_run.svg'),
    title: 'Run',
    children: [
        {
            id: 'completed-runs',
            icon: require('../assets/images/svg-icons/ic_completed_runs.svg'),
            title: 'Completed Runs',
        },
        {
            id: 'queued-runs',
            icon: require('../assets/images/svg-icons/ic_queued_runs.svg'),
            title: 'Queued Runs',
        },
        {
            id: 'create-new-run',
            icon: require('../assets/images/svg-icons/ic_create_new_run.svg'),
            title: 'Create New Run',
        },
    ],
};
