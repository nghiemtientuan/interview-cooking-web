import React from 'react';
import HomePage from '../pages/user/HomePage';
import ContactPage from '../pages/user/ContactPage';

export const pathUrl = {
  user: {
    HomePage: '/',
    ContactPage: '/contact',
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
  }
];

export default routes;
