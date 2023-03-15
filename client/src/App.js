import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useDispatch} from 'react-redux';
import {fetchUserLoginRequest} from 'Src/actions/userActions';

// styles
import './App.css';

// routers
import routes from './routes/routes';

// auth
import {auth} from 'Src/auth';

const App = () => {
  const dispatch = useDispatch();

  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user?.email) {
      dispatch(fetchUserLoginRequest());
    }
  }, [user]);

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
        {showContentMenu(routes)}
      </Routes>
    </Router>
  );
};

App.propTypes = {};

export default App;