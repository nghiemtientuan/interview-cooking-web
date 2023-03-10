import React from 'react';

// routers
import { pathUrl } from "../routes/routes";
import {app} from "../utils/app";

const HeaderComponent = () => {
  const menus = [
    {
      name: 'Home',
      link: pathUrl.user.HomePage,
    },
    {
      name: 'Contact',
      link: pathUrl.user.ContactPage,
    }
  ];

  return (
    <nav className="uk-navbar-container uk-letter-spacing-small">
      <div className="uk-container">
        <div className="uk-position-z-index" data-uk-navbar>
          <div className="uk-navbar-left">
            <a className="uk-navbar-item uk-logo" href={pathUrl.user.HomePage}>{app.name}</a>
            <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
              {
                menus.map((menu, menuIndex) => (
                  <li key={menuIndex} className={menuIndex === 0 ? 'uk-active' : ''}>
                    <a href={menu?.link}>{menu?.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="uk-navbar-right">
            <div>
              <a className="uk-navbar-toggle" data-uk-search-icon href="#"></a>
              <div className="uk-drop uk-background-default" data-uk-drop="mode: click; pos: left-center; offset: 0">
                <form className="uk-search uk-search-navbar uk-width-1-1">
                  <input className="uk-search-input uk-text-demi-bold" type="search" placeholder="Search..." autoFocus />
                </form>
              </div>
            </div>

            <ul className="uk-navbar-nav uk-visible@m">
              <li><a href={pathUrl.user.SignIn}>Sign In</a></li>
            </ul>

            <div className="uk-navbar-item">
              <div>
                <a className="uk-button uk-button-primary" href={pathUrl.user.SignUp}>Sign Up</a>
              </div>
            </div>

            <a className="uk-navbar-toggle uk-hidden@m" href="#offcanvas" data-uk-toggle>
              <span data-uk-navbar-toggle-icon />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
