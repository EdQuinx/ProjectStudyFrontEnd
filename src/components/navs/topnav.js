import React from 'react';
import {
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu
} from 'reactstrap';

import { NavLink } from 'react-router-dom';

import TopnavNotifications from './topnav.noti'

const TopNav = (props) => {

    return (
        <nav className="navbar fixed-top">
            <div className="d-flex align-items-center navbar-left">
              <></>
           </div>
            <NavLink className="navbar-logo" to="/">
                <span className="logo d-none d-xs-block" />
                <span className="logo-mobile d-block d-xs-none" />
            </NavLink>

            <div className="navbar-right">
                <div className="header-icons d-inline-block align-middle">
                    <TopnavNotifications />
                </div>
                <div className="user d-inline-block">
                    <UncontrolledDropdown className="dropdown-menu-right">
                        <DropdownToggle className="p-0" color="empty">
                            <span className="name mr-1">Sarah Kortney</span>
                            <span>
                                <img alt="Profile" src="/assets/img/profiles/l-1.jpg" />
                            </span>
                        </DropdownToggle>
                        <DropdownMenu className="mt-3" right>
                            <DropdownItem>Account</DropdownItem>
                            <DropdownItem>Features</DropdownItem>
                            <DropdownItem>History</DropdownItem>
                            <DropdownItem>Support</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem >
                                Sign out
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            </div>
        </nav>
    );
};


export default TopNav