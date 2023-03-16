import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

// routers
import {pathUrl} from '../routes/routes';
import {app} from '../utils/app';

// actions
import {logoutUserRequest} from 'Src/actions/userActions';

const HeaderComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user: userAuth} = useSelector((state) => state.auth);

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

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logoutUserRequest(() => {
      navigate(pathUrl.user.HomePage);
    }));
  };

  return (
    <nav className='uk-navbar-container uk-letter-spacing-small'>
      <div className='uk-container'>
        <div className='uk-position-z-index' data-uk-navbar>
          <div className='uk-navbar-left'>
            <a className='uk-navbar-item uk-logo' href={pathUrl.user.HomePage}>{app.name}</a>
            <ul className='uk-navbar-nav uk-visible@m uk-margin-large-left'>
              {
                menus.map((menu, menuIndex) => (
                  <li key={menuIndex} className={menuIndex === 0 ? 'uk-active' : ''}>
                    <a href={menu?.link}>{menu?.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className='uk-navbar-right'>
            <div>
              <a className='uk-navbar-toggle' data-uk-search-icon href='#'></a>
              <div className='uk-drop uk-background-default' data-uk-drop='mode: click; pos: left-center; offset: 0'>
                <form className='uk-search uk-search-navbar uk-width-1-1'>
                  <input className='uk-search-input uk-text-demi-bold' type='search' placeholder='Search...' autoFocus/>
                </form>
              </div>
            </div>

            {
              userAuth ? (
                <div className='dropdown'>
                  <button type='button' className='btn btn-outline-success dropdown-toggle' data-bs-toggle='dropdown'>
                    {userAuth.username}
                  </button>

                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href={pathUrl.user.UserPage}>Profile</a>
                      <a className='dropdown-item' onClick={handleLogout}>Logout</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <ul className='uk-navbar-nav'>
                    <li><a href={pathUrl.user.SignIn}>Sign In</a></li>
                  </ul>

                  <div className='uk-navbar-item uk-visible@m'>
                    <div>
                      <a className='uk-button uk-button-primary' href={pathUrl.user.SignUp}>Sign Up</a>
                    </div>
                  </div>
                </>
              )
            }

            <a className='uk-navbar-toggle uk-hidden@m' href='#offcanvas' data-uk-toggle>
              <span data-uk-navbar-toggle-icon/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
