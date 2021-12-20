import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/securityActions';
import NavLinkItem from './NavLinkItem';

class Header extends Component {
  onLogout = () => {
    this.props.logout();
  };

  renderAuthenticatedUserNavLinks = (user) => (
    <div className="collapse navbar-collapse" id="mobile-nav">
      <ul className="navbar-nav ms-5 me-auto">
        <NavLinkItem href="/dashboard">Dashboard</NavLinkItem>
      </ul>

      <ul className="navbar-nav ms-auto">
        <NavLinkItem href="/dashboard">
          <i className="bi bi-person-circle me-2"></i>
          {user.fullName}
        </NavLinkItem>

        <NavLinkItem href="/logout" onClick={this.onLogout}>
          Logout
        </NavLinkItem>
      </ul>
    </div>
  );

  renderUnAuthenticatedUserNavLinks = () => (
    <div className="collapse navbar-collapse" id="mobile-nav">
      <ul className="navbar-nav ms-auto">
        <NavLinkItem href="/register">Sign Up</NavLinkItem>

        <NavLinkItem href="/login">Login</NavLinkItem>
      </ul>
    </div>
  );

  renderNavLinks = (validToken, user) => {
    return validToken && user
      ? this.renderAuthenticatedUserNavLinks(user)
      : this.renderUnAuthenticatedUserNavLinks();
  };

  render() {
    const { validToken, user } = this.props.security;

    return (
      <nav className="navbar navbar-expand-md navbar-dark mb-4">
        <div className="container">
          <Link className="navbar-brand mb-0 h1" to="/">
            Personal Project Management Tool
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {this.renderNavLinks(validToken, user)}
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps, { logout })(Header);
