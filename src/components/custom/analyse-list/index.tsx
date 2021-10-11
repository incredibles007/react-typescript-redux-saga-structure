import React, { FunctionComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import AnalyseItem from '../analyse-item';
import { IRootState } from '../../../models';
import { selectAnalyses } from '../../../store/selector';

interface DispatchFromProps {}

interface StateFromProps {
    analyses: ReturnType<typeof selectAnalyses>;
}

interface OwnProps {}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const AnalyseList: FunctionComponent<Props> = props => {
    const { analyses } = props;

    return (
        <div>
            {analyses.map((item, index) => (
                <AnalyseItem item={item} key={`analyse-item-${index}`} />
            ))}
        </div>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        analyses: selectAnalyses(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(AnalyseList));
