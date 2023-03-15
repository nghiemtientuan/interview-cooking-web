import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
            element={route.main}
          />
        )
      });
    }

    return result
  };

  return (
    <Router>
    <Routes>
      { showContentMenu(routes) }
    </Routes>
</Router>
  );
};

App.propTypes = {};

export default App;