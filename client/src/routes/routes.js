import React from 'react';
import HomePage from '../pages/user/HomePage';
import ContactPage from '../pages/user/ContactPage';
import SignIn from "../pages/user/SignIn";
import SignUp from "../pages/user/SignUp";

export const pathUrl = {
  user: {
    HomePage: '/',
    ContactPage: '/contact',
    SignIn: '/sign-in',
    SignUp: '/sign-up',
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
    path: pathUrl.user.SignIn,
    exact: true,
    main:() => <SignIn />
  },
  {
    path: pathUrl.user.SignUp,
    exact: true,
    main:() => <SignUp />
  },
];

export default routes;
