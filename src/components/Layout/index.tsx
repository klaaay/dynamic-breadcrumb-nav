import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

const Layout = ({ children, locationPath }) => {
  return (
    <div className="content">
      <div className="breadcrumb-content">
        <Breadcrumb locationPath={locationPath} />
      </div>
      <div className="main-content">{children}</div>
    </div>
  );
};

export default Layout;
