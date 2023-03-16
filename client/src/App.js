import React, {useEffect} from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserLoginRequest} from 'Src/actions/userActions';

// styles
import './App.css';

// auth
import {auth} from 'Src/auth';

// utils
import {pathUrl} from 'Src/routes/routes';

// components
import HomePage from 'Src/pages/user/HomePage';
import ContactPage from 'Src/pages/user/ContactPage';
import RecipePage from 'Src/pages/user/RecipePage';
import SignIn from 'Src/pages/user/SignIn';
import SignUp from 'Src/pages/user/SignUp';
import NotFound from 'Src/pages/NotFound';

const App = () => {
  const dispatch = useDispatch();
  const {user: userAuth} = useSelector((state) => state.auth);

  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user?.email) {
      dispatch(fetchUserLoginRequest());
    }
  }, [user]);

  return (
    <Router>
      <Routes>
        <Route path={pathUrl.user.HomePage} exact element={<HomePage/>} />
        <Route path={pathUrl.user.ContactPage} exact element={<ContactPage/>} />
        <Route path={pathUrl.user.RecipePage + '/:id'} exact element={<RecipePage/>} />
        <Route
          path={pathUrl.user.SignIn}
          exact
          element={
            userAuth ? <Navigate to={pathUrl.user.HomePage} /> : <SignIn/>
          }
        />
        <Route
          path={pathUrl.user.SignUp}
          exact
          element={
            userAuth ? <Navigate to={pathUrl.user.HomePage} /> : <SignUp/>
          }
        />
        <Route path='*' exact element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

App.propTypes = {};

export default App;