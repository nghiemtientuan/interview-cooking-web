import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import routes from './routes/routes';

const App = () => {
  const showContentMenu = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      });
    }

    return <Switch>{result}</Switch>
  };

  return (
    <Router>
      { showContentMenu(routes) }
    </Router>
  );
};

App.propTypes = {};

export default App;