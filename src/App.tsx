import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '@/routers';
import NavBar from '@/components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Switch>{renderRoutes(routes)}</Switch>
        <Redirect to="/home" />
      </div>
    </BrowserRouter>
  );
}

export default App;
