import React, { FunctionComponent, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '../../../models';

interface DispatchFromProps { }

interface StateFromProps { }

interface OwnProps {
    title: string;
    visibleBadge?: boolean;
    badgeValue?: number;
    visibleDelete?: boolean;
    visibleAdd?: boolean;
    children: any;
    className?: string;
}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const SidepaneSpoiler: FunctionComponent<Props> = props => {
    const [expanded, setExpanded] = useState(true);
    const {
        title,
        visibleBadge,
        badgeValue,
        visibleDelete,
        visibleAdd,
        children,
        className,
    } = props;

    const onSpoilerHeader = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <div className={`spoiler sidepane__spoiler ${className}`}>
                <div
                    className="spoiler__head"
                    onClick={() => onSpoilerHeader()}
                >
                    <div
                        className={`spoiler__title ${expanded ? 'spoiler__title--opened' : ''
                            }`}
                    >
                        {title}
                        {visibleBadge && (
                            <span className="spoiler__counter">
                                {badgeValue}
                            </span>
                        )}
                    </div>
                    {visibleDelete && (
                        <button
                            type="button"
                            className="spoiler__plus"
                        ></button>
                    )}
                    {visibleAdd && (
                        <button
                            type="button"
                            className="spoiler__delete"
                        ></button>
                    )}
                </div>

                <div
                    className="spoiler__cont"
                    style={{ display: expanded ? 'block' : 'none' }}
                >
                    {children}
                </div>
            </div>
        </>
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
)(withRouter(SidepaneSpoiler));
