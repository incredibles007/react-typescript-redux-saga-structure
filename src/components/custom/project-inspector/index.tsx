import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ReactSVG } from 'react-svg';

import {
    Sidepane,
    SidepaneContent,
    SidepaneFooter,
    SidepaneHeader,
    SidepaneSpoiler,
} from '../../../components';
import ProjectDetails from '../project-details';
import { IRootState } from '../../../models';
import * as fromUiAction from '../../../store/actions/ui.action';
import {
    selectSelectedUserGroupUser,
    selectUserInspectorConfig,
} from '../../../store/selector';

interface DispatchFromProps {
    updateProjectInspectorConfig: typeof fromUiAction.updateProjectInspectorConfig;
}

interface StateFromProps {}

interface OwnProps {}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const ProjectInspector: FunctionComponent<Props> = props => {
    const { updateProjectInspectorConfig } = props;

    const onClose = () => {
        updateProjectInspectorConfig({ visible: false });
    };

    const onSave = () => {};

    return (
        <Sidepane>
            <SidepaneHeader title={'Edit Project'} onClose={() => onClose()} />
            <SidepaneContent style={{ height: `calc(100vh - 188px)` }}>
                <SidepaneSpoiler title="Details">
                    <ProjectDetails />
                </SidepaneSpoiler>

                <button
                    type="button"
                    className="button button--delete sidepane__delete"
                >
                    <ReactSVG
                        src={require('../../../assets/images/svg-icons/ic_delete.svg')}
                        style={{ display: 'inline-block' }}
                    />
                    &nbsp;&nbsp;Delete Project
                </button>
            </SidepaneContent>
            <SidepaneFooter>
                <button
                    type="submit"
                    className="button button--primary"
                    onClick={() => onSave()}
                >
                    Save Changes
                </button>
            </SidepaneFooter>
        </Sidepane>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        userInspectorConfig: selectUserInspectorConfig(state),
        selectedUserGroupUser: selectSelectedUserGroupUser(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {
        updateProjectInspectorConfig: payload =>
            dispatch(fromUiAction.updateProjectInspectorConfig(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ProjectInspector));
