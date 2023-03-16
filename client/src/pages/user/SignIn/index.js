import React from 'react';
import { css } from '@emotion/react';

import { pathUrl } from 'Src/routes/routes';
import { app } from 'Src/utils/app';

import signInImage from 'Public/assets/img/sign-in.png';

// styles
const signInImageStyle = css`
  background: url('${signInImage}');
`;

const SignIn = () => {
  return (
    <div className="uk-grid-collapse" data-uk-grid>
      <div className="uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center" data-uk-height-viewport>
        <div className="uk-width-3-4@s">
          <div className="uk-text-center uk-margin-bottom">
            <a className="uk-logo uk-text-primary uk-text-bold" href={pathUrl.user.HomePage}>{app.name}</a>
          </div>

          <div className="uk-text-center uk-margin-medium-bottom">
            <h1 className="uk-h2 uk-letter-spacing-small">Sign In to {app.name}</h1>
          </div>

          <div data-uk-grid className="uk-child-width-auto uk-grid-small uk-flex uk-flex-center uk-margin">
            <div>
              <a href="#" data-uk-icon="icon: facebook" className="uk-icon-button uk-icon-button-large facebook"></a>
            </div>

            <div>
              <a href="#" data-uk-icon="icon: google-plus"
                 className="uk-icon-button uk-icon-button-large google-plus"></a>
            </div>

            <div>
              <a href="#" data-uk-icon="icon: linkedin" className="uk-icon-button uk-icon-button-large linkedin"></a>
            </div>
          </div>

          <div className="uk-text-center uk-margin">
            <p className="uk-margin-remove">Or use your email account:</p>
          </div>

          <form className="uk-text-center">
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="email">Email</label>
              <input
                id="email"
                className="uk-input uk-form-large uk-border-pill uk-text-center"
                type="email"
                placeholder="tom@company.com"
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="password">Password</label>
              <input
                id="password"
                className="uk-input uk-form-large uk-border-pill uk-text-center"
                type="password"
                placeholder="Min 8 characters"
              />
            </div>

            <div className="uk-width-1-1 uk-margin uk-text-center">
              <a className="uk-text-small uk-link-muted" href="#">Forgot your password?</a>
            </div>

            <div className="uk-width-1-1 uk-text-center">
              <button className="uk-button uk-button-primary uk-button-large">Sign In</button>
            </div>
          </form>
        </div>
      </div>

      <div
        className="uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center uk-light"
        data-uk-height-viewport
      >
        <div
          className="uk-background-cover uk-background-norepeat uk-background-blend-overlay uk-background-overlay uk-border-rounded-large uk-width-1-1 uk-height-xlarge uk-flex uk-flex-middle uk-flex-center"
          css={signInImageStyle}
        >
          <div className="uk-padding-large">
            <div className="uk-text-center">
              <h2 className="uk-letter-spacing-small">Hello There, Join Us</h2>
            </div>

            <div className="uk-margin-top uk-margin-medium-bottom uk-text-center">
              <p>Enter your personal details and join the cooking community</p>
            </div>

            <div className="uk-width-1-1 uk-text-center">
              <a href={pathUrl.user.SignUp} className="uk-button uk-button-primary uk-button-large">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
