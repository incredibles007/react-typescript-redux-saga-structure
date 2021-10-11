import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import Moment from 'react-moment';

import './index.scss';
import { IRootState } from '../../../models';
import { selectProjects } from '../../../store/selector';
import * as fromProjectAction from '../../../store/actions/project.action';
import * as fromUiAction from '../../../store/actions/ui.action';

interface DispatchFromProps {
    setSelectedProject: typeof fromProjectAction.setSelectedProject;
    updateProjectInspectorConfig: typeof fromUiAction.updateProjectInspectorConfig;
}

interface StateFromProps {
    projects: ReturnType<typeof selectProjects>;
}

interface OwnProps {}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const ProjectList: FunctionComponent<Props> = props => {
    const {
        projects,
        setSelectedProject,
        updateProjectInspectorConfig,
    } = props;

    const headers = ['Project Name', 'Owner', 'Created', 'Last Edited', ''];

    const onEdit = (project: any) => {
        setSelectedProject(project);
        updateProjectInspectorConfig({ visible: true });
    };

    const onSelectProject = (project: any) => {
        localStorage.setItem('selectedGraphId', project.graphId);
        props.history.push(`/graph-builder`);
    };

    return (
        <>
            <div className="data-table project-list">
                <table className="data-table__table p">
                    <thead>
                        <tr>
                            {headers.map(item => (
                                <th key={`header-${item}`}>{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((item: any, index: number) => (
                            <tr
                                key={`project-item-${index}`}
                                onClick={() => onSelectProject(item)}
                                className="cursor-pointer"
                            >
                                <td>{item.name}</td>
                                <td>
                                    <div className="data-table__username">
                                        {item.appUser.firstName}{' '}
                                        {item.appUser.lastName}
                                    </div>
                                </td>
                                <td>
                                    <Moment format="MMM D, YYYY [at] h:mm a">
                                        {item.createdOn}
                                    </Moment>
                                </td>
                                <td>
                                    <Moment format="MMM D, YYYY [at] h:mm a">
                                        {item.modifiedOn}
                                    </Moment>
                                </td>
                                <td className="data-table__actions">
                                    <button
                                        type="button"
                                        data-tip="Edit"
                                        data-for="edit"
                                        className="data-table__action data-table__action--edit"
                                        onClick={(event: any) => {
                                            event.stopPropagation();
                                            onEdit(item);
                                        }}
                                    ></button>

                                    <ReactTooltip
                                        id="edit"
                                        place={'top'}
                                        effect={'solid'}
                                        className="tooltip-wrapper"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        projects: selectProjects(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {
        setSelectedProject: payload =>
            dispatch(fromProjectAction.setSelectedProject(payload)),
        updateProjectInspectorConfig: payload =>
            dispatch(fromUiAction.updateProjectInspectorConfig(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ProjectList));
