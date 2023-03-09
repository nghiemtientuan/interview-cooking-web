import React from 'react';
import { pathUrl } from '../routes/routes';
import {app} from "../utils/app";

const NotFound = () => {
  return (
    <div className="uk-grid-collapse" data-uk-grid>
      <div
        className="uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center w-100"
        data-uk-height-viewport
      >
        <div className="uk-width-3-4@s">
          <div className="uk-text-center uk-margin-bottom">
            <a className="uk-logo uk-text-primary uk-text-bold" href={pathUrl.user.HomePage}>{app.name}</a>
          </div>

          <div className="uk-text-center uk-margin-medium-bottom">
            <h1 className="uk-h2 uk-letter-spacing-small">404 Not Found</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
