import React from 'react';
import { renderRoutes } from 'react-router-config';
import Layout from '@/components/Layout';

const Electronics = ({ route, location }) => {
  return (
    <Layout locationPath={location.pathname}>
      <div>
        <h1>Electronics</h1>
        {renderRoutes(route.routes)}
      </div>
    </Layout>
  );
};

export default Electronics;
