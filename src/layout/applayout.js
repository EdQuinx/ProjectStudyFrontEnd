import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TopNav from 'containers/navs/Topnav'

const AppLayout = ({ children, history }) => {
  return (
    <div id="app-container" className="menu-hidden">
      <TopNav />
      <main>
        <div className="container-fluid">{children}</div>
      </main>
    </div>
  );
};


export default AppLayout
