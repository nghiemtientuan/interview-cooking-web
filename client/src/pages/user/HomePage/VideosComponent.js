import React from 'react';

const VideosComponent = () => {
  return (
    <div className="uk-section uk-section-default">
      <div className="uk-container">
        <div data-uk-grid>
          <div className="uk-width-expand">
            <h2>Videos</h2>
          </div>
          <div className="uk-width-1-3 uk-text-right uk-light">
            <select className="uk-select uk-select-light uk-width-auto uk-border-pill uk-select-primary">
              <option>Featured</option>
              <option>Top Rated</option>
              <option>Trending</option>
            </select>
          </div>
        </div>
        <div className="uk-child-width-1-2 uk-child-width-1-4@s" data-uk-grid>
          <div>
            <div
              className="uk-card uk-card-video">
              <div className="uk-inline uk-light">
                <img className="uk-border-rounded-large" src="https://via.placeholder.com/300x400"
                     alt="Course Title" />
                <div className="uk-position-cover uk-card-overlay uk-border-rounded-large"></div>
                <div className="uk-position-center">
                  <span data-uk-icon="icon: play-circle; ratio: 3.4"></span>
                </div>
                <div className="uk-position-small uk-position-bottom-left">
                  <h5 className="uk-margin-small-bottom">Business Presentation Course</h5>
                  <div className="uk-text-xsmall">by Thomas Haller</div>
                </div>
              </div>
              <a href="recipe.html" className="uk-position-cover"></a>
            </div>
          </div>
          <div>
            <div
              className="uk-card uk-card-video">
              <div className="uk-inline uk-light">
                <img className="uk-border-rounded-large" src="https://via.placeholder.com/300x400" alt="Course Title" />
                <div className="uk-position-cover uk-card-overlay uk-border-rounded-large"></div>
                <div className="uk-position-center">
                  <span data-uk-icon="icon: play-circle; ratio: 3.4"></span>
                </div>
                <div className="uk-position-small uk-position-bottom-left">
                  <h5 className="uk-margin-small-bottom">Business Presentation Course</h5>
                  <div className="uk-text-xsmall">by Thomas Haller</div>
                </div>
              </div>
              <a href="recipe.html" className="uk-position-cover"></a>
            </div>
          </div>
          <div>
            <div
              className="uk-card uk-card-video">
              <div className="uk-inline uk-light">
                <img className="uk-border-rounded-large" src="https://via.placeholder.com/300x400" alt="Course Title" />
                <div className="uk-position-cover uk-card-overlay uk-border-rounded-large"></div>
                <div className="uk-position-center">
                  <span data-uk-icon="icon: play-circle; ratio: 3.4"></span>
                </div>
                <div className="uk-position-small uk-position-bottom-left">
                  <h5 className="uk-margin-small-bottom">Business Presentation Course</h5>
                  <div className="uk-text-xsmall">by Thomas Haller</div>
                </div>
              </div>
              <a href="recipe.html" className="uk-position-cover"></a>
            </div>
          </div>
          <div>
            <div
              className="uk-card uk-card-video">
              <div className="uk-inline uk-light">
                <img className="uk-border-rounded-large" src="https://via.placeholder.com/300x400" alt="Course Title" />
                <div className="uk-position-cover uk-card-overlay uk-border-rounded-large"></div>
                <div className="uk-position-center">
                  <span data-uk-icon="icon: play-circle; ratio: 3.4"></span>
                </div>
                <div className="uk-position-small uk-position-bottom-left">
                  <h5 className="uk-margin-small-bottom">Business Presentation Course</h5>
                  <div className="uk-text-xsmall">by Thomas Haller</div>
                </div>
              </div>
              <a href="recipe.html" className="uk-position-cover"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosComponent;
