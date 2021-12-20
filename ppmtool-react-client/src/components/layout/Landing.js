import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Landing extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">
                  Personal Project Management Tool
                </h1>
                <p className="lead">
                  Create an account to join active projects or start you own
                </p>
                <hr />
                <Link
                  to="/register"
                  className="btn btn-lg btn-purple-main me-3"
                >
                  Sign Up
                </Link>

                <Link
                  to="/login"
                  className="btn btn-lg btn-purple-outline ms-2"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  security: PropTypes.object.isRequired,
};

const mapSatetToProps = (state) => ({
  security: state.security,
});

export default connect(mapSatetToProps)(Landing);
