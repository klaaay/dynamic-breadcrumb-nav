import React from 'react';
import Layout from '@/components/Layout';

const Foods = ({ location }) => {
  return (
    <Layout locationPath={location.pathname}>
      <h1>Foods</h1>
    </Layout>
  );
};

export default Foods;
