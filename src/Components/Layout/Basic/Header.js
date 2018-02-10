import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from '../../../Lib/Common/Views';
import Button from '../../Button';

class Header extends Component {
  render() {
    const path = this.props.match.path;

    return (
      <header className="header">
        <Navbar>
          <Navbar.Header>
            <Link to="/" className="navbar-brand">{process.env.REACT_APP_SITE_NAME}</Link>
            <Navbar.Toggle id="js-navbar-toggle-btn" />
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="navbar-nav nav navbar-right">
              <NavLink title="Dashboard" to="/dashboard" path={path} />
              <NavLink title="Projects" to="/projects" path={path} />
              <NavLink title="Team" to="/team" path={path} />
              <NavLink title="Company" to="/company" path={path} />
              <NavDropdown className="account-menu" title="Account" id="js-account-menu">
                <NavLink title="My Profile" to="/account/my-profile" path={path} />
                <NavLink title="My Projects" to="/account/my-projects" path={path} count={1} />
                <NavLink title="Notifications" to="/account/notifications" path={path} count={10} />
                <NavLink title="Tasks" to="/account/tasks" path={path} count={100} />
                <NavLink title="Help" to="/help" path={path} />
                <Button.SignOut />
              </NavDropdown>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
};

export default withRouter(Header);
