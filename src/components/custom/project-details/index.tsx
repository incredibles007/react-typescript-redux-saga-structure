import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '../../../models';
import { selectSelectedProject } from '../../../store/selector';
import * as fromProjectAction from '../../../store/actions/project.action';

interface DispatchFromProps {
    setSelectedProject: typeof fromProjectAction.setSelectedProject;
}

interface StateFromProps {
    selectedProject: ReturnType<typeof selectSelectedProject>;
}

interface OwnProps {}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const ProjectDetails: FunctionComponent<Props> = props => {
    const { selectedProject, setSelectedProject } = props;

    const onChangeProjectName = (name: string) => {
        setSelectedProject({ name });
    };

    return (
        <>
            <div className="grid-row">
                <div className="grid-col grid-col--4">
                    <label className="p tc--light sidepane__label">Name</label>
                </div>
                <div className="grid-col grid-col--8">
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Enter Project Name"
                        value={selectedProject.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onChangeProjectName(e.target.value)
                        }
                    />
                </div>
            </div>

            <div className="mt--050 grid-row">
                <div className="grid-col grid-col--4">
                    <label className="p tc--light sidepane__label">
                        Description
                    </label>
                </div>
                <div className="grid-col grid-col--8">
                    <textarea
                        rows={5}
                        cols={5}
                        placeholder="Enter a Description"
                        className="form-textarea"
                    ></textarea>
                </div>
            </div>
        </>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        selectedProject: selectSelectedProject(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {
        setSelectedProject: (payload: any) =>
            dispatch(fromProjectAction.setSelectedProject(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ProjectDetails));
