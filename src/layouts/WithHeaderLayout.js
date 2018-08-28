import React, { Component } from 'react';
import Routes from '../utils/Routes';
import { withRouter, Link } from 'react-router-dom';

class WithHeaderLayout extends Component {
  render() {
    return (
      <div>
        <header id="header" className="header-wrap">
          <div className="header-bar">
            <div className="header-inner">
              <div className="logo-wrap">
                <a
                  className="logo"
                  onClick={() => this.props.history.push('/')}
                >
                  创世纪
                </a>
              </div>
              <div className="nav-menu">
                <ul>
                  <li className="active">
                    <Link to="/user">PRD管理</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <Routes />
      </div>
    );
  }
}

export default withRouter(WithHeaderLayout);
