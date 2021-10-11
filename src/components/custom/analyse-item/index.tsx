import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import './index.scss';
import { IRootState } from '../../../models';

interface DispatchFromProps {}

interface StateFromProps {}

interface OwnProps {
    item: any;
}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

// Should be updated with the template which is Alex is going to provide
const AnalyseItem: FunctionComponent<Props> = props => {
    const { item } = props;

    const onAnalyseItem = (id: string) => {
        props.history.push(`/analyse/${id}`);
    };

    return (
        <div
            className="analyse-item-wrapper"
            onClick={() => onAnalyseItem(item.resultAnalysisProjectId)}
        >
            <div className="analyse-name">{item.name}</div>
            <div className="analyse-owner">{item.appUserId}</div>
            <div className="analyse-created-at">
                {item.resultAnalysisProjectRuns}
            </div>
            <div className="analyse-updated-at">{item.charts}</div>
        </div>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(AnalyseItem));
