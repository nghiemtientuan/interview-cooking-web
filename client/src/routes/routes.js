import React from 'react';
import HomePage from '../pages/user/HomePage';
import ContactPage from '../pages/user/ContactPage';
import SignIn from "../pages/user/SignIn";
import SignUp from "../pages/user/SignUp";
import RecipePage from "../pages/user/RecipePage";
import NotFound from "../pages/NotFound";

export const pathUrl = {
  user: {
    HomePage: '/',
    ContactPage: '/contact',
    SignIn: '/sign-in',
    SignUp: '/sign-up',
    RecipePage: '/recipes',
  },
  admin: {}
}

const routes = [
  {
    path: pathUrl.user.HomePage,
    exact: true,
    main:() => <HomePage />
  },
  {
    path: pathUrl.user.ContactPage,
    exact: true,
    main:() => <ContactPage />
  },
  {
    path: pathUrl.user.RecipePage + '/:id',
    exact: true,
    main:(props) => <RecipePage {...props} />
  },
  {
    path: pathUrl.user.SignIn,
    exact: true,
    main:() => <SignIn />
  },
  {
    path: pathUrl.user.SignUp,
    exact: true,
    main:() => <SignUp />
  },
  {
    path: '*',
    main:() => <NotFound />
  },
];

export default routes;
