import React, { FunctionComponent, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import './index.scss';
import { IRootState } from '../../../models';
import { ReactSVG } from 'react-svg';
import {
    SidepaneContent,
    SidepaneHeader,
    SidepaneSpoiler,
} from '../../sidepane';

const userGroups = [
    {
        id: '0',
        title: 'Testing Group1',
    },
    {
        id: '1',
        title: 'Beta Testers',
    },
    {
        id: '2',
        title: 'Graph Builder Groups',
    },
    {
        id: '3',
        title: 'Iterator Approvers',
    },
    {
        id: '4',
        title: 'Testing Group 2',
    },
    {
        id: '5',
        title: 'Model Reviewers',
    },
];

interface DispatchFromProps {}

interface StateFromProps {}

interface OwnProps {}

type Props = OwnProps &
    StateFromProps &
    DispatchFromProps &
    RouteComponentProps;

const UserGroupsSelector: FunctionComponent<Props> = props => {
    const [expanded, setExpanded] = useState(false);
    const [visibleEditPopup, setVisibleEditPopup] = useState(false);
    const [value, setValue] = useState('Select a group');

    const toggleDropdown = () => {
        setExpanded(!expanded);
    };

    const onGroupItem = (groupId: string) => {
        setValue(userGroups.filter(group => group.id === groupId)[0].title);
        setExpanded(false);
    };

    const onAddGroupItem = () => {};

    const onEdit = () => {
        setVisibleEditPopup(!visibleEditPopup);
    };

    return (
        <div className="mt--050 grid-row grid-row--smg grid-row--aic">
            <div className="grid-col grid-col--auto">
                <div className="form-checkbox form-checkbox_nolabel">
                    <input
                        type="checkbox"
                        name="checkbox"
                        className="form-checkbox__input"
                    />
                    <span className="form-checkbox__icon"></span>
                </div>
            </div>
            <div className="grid-col">
                <div className={`form-multiselect ${expanded ? 'active' : ''}`}>
                    <input
                        type="text"
                        value={value}
                        readOnly
                        className="form-select form-multiselect__input"
                        onClick={() => toggleDropdown()}
                    />
                    <div className="form-multiselect__dropdown no-checkbox">
                        <div className="add-group-item-btn-wrapper">
                            <label
                                className="form-checkbox__label add-group-item-btn"
                                onClick={() => onAddGroupItem()}
                            >
                                <span className="ic-plus">+</span>
                                <span className="title">Add New Group</span>
                            </label>
                        </div>
                        {userGroups.map((item, index) => (
                            <div
                                key={`user-group-${index}`}
                                className="form-checkbox"
                                onClick={() => onGroupItem(item.id)}
                            >
                                <label className="form-checkbox__label">
                                    {item.title}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {expanded ? null : (
                <div className="grid-col grid-col--auto">
                    <button
                        type="button"
                        className="button button--small button--iconic"
                        onClick={() => onEdit()}
                    >
                        <ReactSVG
                            src={require('../../../assets/images/svg-icons/ic_edit.svg')}
                        />
                    </button>

                    {visibleEditPopup && (
                        <div
                            className="sidepane__popover"
                            style={{ top: '189px' }}
                        >
                            <SidepaneHeader
                                title="Edit Business Variable"
                                onClose={() => {}}
                            />

                            <SidepaneContent>
                                <SidepaneSpoiler title="Details">
                                    <div className="grid-row">
                                        <div className="grid-col grid-col--4">
                                            <label className="p tc--light sidepane__label">
                                                Type
                                            </label>
                                        </div>
                                        <div className="grid-col grid-col--8">
                                            <select className="form-select">
                                                <option>Simple</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt--050 grid-row">
                                        <div className="grid-col grid-col--4">
                                            <label className="p tc--light sidepane__label">
                                                Name
                                            </label>
                                        </div>
                                        <div className="grid-col grid-col--8">
                                            <input
                                                type="text"
                                                className="form-input"
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
                                </SidepaneSpoiler>

                                <SidepaneSpoiler title="Configuration">
                                    <div className="grid-row">
                                        <div className="grid-col grid-col--4">
                                            <label className="p tc--light">
                                                IsKey
                                            </label>
                                        </div>
                                        <div className="grid-col grid-col--8">
                                            <div className="form-checkbox">
                                                <input
                                                    type="checkbox"
                                                    name="checkbox"
                                                    className="form-checkbox__input"
                                                />
                                                <label className="form-checkbox__label">
                                                    Yes
                                                </label>
                                                <span className="form-checkbox__icon"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt--050 grid-row">
                                        <div className="grid-col grid-col--4">
                                            <label className="p tc--light sidepane__label">
                                                Type
                                            </label>
                                        </div>
                                        <div className="grid-col grid-col--8">
                                            <select className="form-select">
                                                <option>Boolean</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt--050 grid-row">
                                        <div className="grid-col grid-col--4">
                                            <label className="p tc--light sidepane__label">
                                                Unit Exp.
                                            </label>
                                        </div>
                                        <div className="grid-col grid-col--8">
                                            <select className="form-select">
                                                <option>{`{A}{B}^-1`}</option>
                                            </select>
                                        </div>
                                    </div>
                                </SidepaneSpoiler>

                                <div className="sidepane__spoiler">
                                    <button
                                        type="submit"
                                        className="button button--primary"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </SidepaneContent>
                        </div>
                    )}
                </div>
            )}
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
)(withRouter(UserGroupsSelector));
