import React from 'react';
import { matchRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import routes from '@/routers';
import { Breadcrumb as AntBreadcrumb } from 'antd';

const Breadcrumb = ({ locationPath }) => {
  let matchedRoutes = matchRoutes(routes, locationPath);
  return (
    <AntBreadcrumb>
      {matchedRoutes.map((matchRoute, i) => {
        const { path, name } = matchRoute.route;
        const isActive = path === locationPath;
        return (
          <AntBreadcrumb.Item>
            {isActive ? name : <Link to={path}>{name}</Link>}
          </AntBreadcrumb.Item>
        );
      })}
    </AntBreadcrumb>
  );
};

export default Breadcrumb;
