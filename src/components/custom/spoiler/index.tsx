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
    visibleEdit?: boolean;
    children: any;
    className?: string;
}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const Spoiler: FunctionComponent<Props> = props => {
    const [expanded, setExpanded] = useState(true);
    const {
        title,
        visibleBadge,
        badgeValue,
        visibleDelete,
        visibleEdit,
        children,
        className,
    } = props;

    const onSpoilerHeader = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <div className={`spoiler spoiler--alt ${className}`}>
                <div
                    className="spoiler__head"
                    onClick={() => onSpoilerHeader()}
                >
                    <div
                        className={`spoiler__title tc--light ${expanded ? 'spoiler__title--opened' : ''
                            }`}
                    >
                        {title}
                        {visibleBadge && (
                            <span className="spoiler__counter">
                                {badgeValue}
                            </span>
                        )}
                    </div>
                    {visibleEdit && (
                        <button
                            type="button"
                            data-tooltip="Edit Group"
                            className="spoiler__edit hoverable"
                        ></button>
                    )}
                    {visibleDelete && (
                        <button
                            type="button"
                            data-tooltip="Delete Group"
                            className="spoiler__delete hoverable"
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
)(withRouter(Spoiler));
