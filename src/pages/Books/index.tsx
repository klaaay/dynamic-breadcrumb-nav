import React from 'react';
import Layout from '@/components/Layout';

const Books = ({ location }) => {
  return (
    <Layout locationPath={location.pathname}>
      <h1>Books</h1>
    </Layout>
  );
};

export default Books;
