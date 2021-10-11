import React, { FunctionComponent } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { HeaderActionDropdown } from '../../../components';
import {
    graphRunDropdown,
    graphSaveDropdown,
    graphShareDropdown,
} from '../../../consts';
import { IRootState } from '../../../models';
import * as fromUiAction from '../../../store/actions/ui.action';
import { selectTitleBar } from '../../../store/selector';

interface DispatchFromProps {
    updateGraphRunInspectorConfig: typeof fromUiAction.updateGraphRunInspectorConfig;
}

interface StateFromProps {
    titleBar: ReturnType<typeof selectTitleBar>;
}

interface OwnProps {}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const Header: FunctionComponent<Props> = props => {
    const { titleBar, updateGraphRunInspectorConfig } = props;
    const {
        title,
        versionControl,
        shareControl,
        downloadControl,
        saveControl,
        runsControl,
        editControl,
        // compileControl,
        refreshControl,
        // clearAllControl,
    } = titleBar;

    const onGraphRunOption = (item: any) => {
        updateGraphRunInspectorConfig({
            selectedInspector: item.id,
            visible: true,
        });
    };

    return (
        <div className="header">
            <div className="grid-row grid-row--aic">
                <div className="grid-col grid-col--auto">
                    <Link to="/">
                        <img
                            src={require('../../../assets/images/logo-small.svg')}
                            alt=""
                        />
                    </Link>
                </div>

                <div className="grid-col grid-col--auto">
                    <h1 className="headline">{title}</h1>
                </div>

                <div className="grid-col grid-col--auto">
                    {versionControl && (
                        <nav className="version-nav">
                            <button
                                type="button"
                                className="version-nav__button"
                            >
                                <span>5.0</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="8"
                                    height="8"
                                    viewBox="0 0 12 12"
                                >
                                    <path
                                        d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"
                                        fill="#DFDFDF"
                                    ></path>
                                </svg>
                            </button>
                        </nav>
                    )}
                </div>

                <div className="grid-col"></div>

                <nav className="actions-nav">
                    {shareControl && (
                        <HeaderActionDropdown
                            item={graphShareDropdown}
                            position={'right'}
                            onClick={() => {}}
                        />
                    )}
                    {downloadControl && (
                        <div className="actions-nav__item">
                            <Link to="/" className="actions-nav__link">
                                <span className="actions-nav__button">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16px"
                                        height="16px"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill="#DFDFDF"
                                            d="M13,7.1c0,0,0-0.1,0-0.1c0-2.8-2.2-5-5-5C5.5,2,3.4,3.8,3.1,6.3C1.3,6.9,0,8.5,0,10.5C0,13,2,15,4.5,15 c1.7,0,5.9,0,7.5,0c2.2,0,4-1.8,4-4C16,9.1,14.7,7.6,13,7.1z M8,13L4,9h3V6h2v3h3L8,13z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="actions-nav__label">
                                    Download
                                </span>
                            </Link>
                        </div>
                    )}
                    {refreshControl && (
                        <div className="actions-nav__item">
                            <Link to="/" className="actions-nav__link">
                                <span className="actions-nav__button">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16px"
                                        height="16px"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill="#DFDFDF"
                                            d="M13,7.1c0,0,0-0.1,0-0.1c0-2.8-2.2-5-5-5C5.5,2,3.4,3.8,3.1,6.3C1.3,6.9,0,8.5,0,10.5C0,13,2,15,4.5,15 c1.7,0,5.9,0,7.5,0c2.2,0,4-1.8,4-4C16,9.1,14.7,7.6,13,7.1z M8,13L4,9h3V6h2v3h3L8,13z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="actions-nav__label">
                                    Refresh
                                </span>
                            </Link>
                        </div>
                    )}
                    {downloadControl && saveControl && (
                        <div className="actions-nav__divider"></div>
                    )}
                    {saveControl && (
                        <HeaderActionDropdown
                            item={graphSaveDropdown}
                            position={'right'}
                            onClick={() => {}}
                        />
                    )}
                    {runsControl && (
                        <HeaderActionDropdown
                            item={graphRunDropdown}
                            position={'right'}
                            onClick={(item: any) => onGraphRunOption(item)}
                        />
                    )}
                    {runsControl && editControl && (
                        <div className="actions-nav__divider"></div>
                    )}
                    {editControl && (
                        <div className="actions-nav__item">
                            <div className="actions-nav__toggle">
                                <input type="checkbox" defaultChecked />
                                <span></span>
                            </div>
                            <span className="actions-nav__label">Edit</span>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
};

function mapStateToProps(state: IRootState): StateFromProps {
    return {
        titleBar: selectTitleBar(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
    return {
        updateGraphRunInspectorConfig: (payload: any) =>
            dispatch(fromUiAction.updateGraphRunInspectorConfig(payload)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
