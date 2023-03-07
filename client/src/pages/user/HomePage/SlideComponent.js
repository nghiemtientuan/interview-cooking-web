import React from 'react';
import { css } from '@emotion/react'

// utils
import { pathUrl } from "../../../routes/routes";
import { app } from "../../../utils/app";

const sidebarStyle = css`
  background: url('${app.sidebarImagePath}');
`;

const SlideComponent = () => {
  return (
    <div className="uk-container">
      <div
        className="uk-border-rounded-large uk-background-top-center uk-background-cover uk-background-norepeat uk-light uk-inline uk-overflow-hidden uk-width-1-1"
        css={sidebarStyle}
      >
        <div className="uk-position-cover uk-header-overlay"></div>
        <div className="uk-position-relative" data-uk-grid>
          <div className="uk-width-1-2@m uk-flex uk-flex-middle">
            <div className="uk-padding-large uk-padding-remove-right">
              <h1 className="uk-heading-small uk-margin-remove-top">Choose from thousands of recipes</h1>
              <p className="uk-text-secondary">
                Appropriately integrate technically sound value with scalable infomediaries negotiate sustainable strategic theme areas
              </p>
              <a className="uk-text-secondary uk-text-600 uk-text-small hvr-forward" href={pathUrl.user.SignUp}>Sign up today
                <span className="uk-margin-small-left" data-uk-icon="arrow-right"></span>
              </a>
            </div>
          </div>
          <div className="uk-width-expand@m">
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideComponent;
