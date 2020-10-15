import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from '../styles/global';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => {
    return (
      <>
          <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/repository" component={Repository} />
            </Switch>
          <GlobalStyle />
        </>
    );
};

export default Routes;
