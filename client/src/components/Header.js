import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  _renderStatus() {
    const { auth } = this.props;
    if (auth.user === null) {
      return 'Waiting....';
    }
    if (auth.user === false) {
      return (
        <li>
          <a href="/auth/google">Log In With Google</a>
        </li>
      );
    }
    return (
      <li>
        <a href="/api/logout">Logout</a>
      </li>
    );
  }

  render() {
    const { auth } = this.props;
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={auth.user ? '/surveys' : '/'} className="left brand-logo">
            Logo
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this._renderStatus()}
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  auth
});
export default connect(mapStateToProps)(Header);
