import React from 'react';

const RecipeIntroComponent = () => {
  return (
    <div className="uk-container">
      <div data-uk-grid>
        <div className="uk-width-1-2@s">
          <div>
            <img
              className="uk-border-rounded-large"
              src="https://via.placeholder.com/600x600"
              alt="Image alt"
            />
          </div>
        </div>

        <div className="uk-width-expand@s uk-flex uk-flex-middle">
          <div>
            <h1>White calzones with marinara sauce</h1>
            <p>Supermarket
              brands of ricotta contain stabilizers, which can give the cheese a gummy texture when baked. Check
              the label and choose ricotta made with as few ingredients as possible.</p>
            <div className="uk-margin-medium-top uk-child-width-expand uk-text-center uk-grid-divider" data-uk-grid>
              <div>
                <span data-uk-icon="icon: clock; ratio: 1.4"></span>
                <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">Active Time</h5>
                <span className="uk-text-small">20 mins</span>
              </div>

              <div>
                <span data-uk-icon="icon: future; ratio: 1.4"></span>
                <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">Total Time</h5>
                <span className="uk-text-small">50 mins</span>
              </div>

              <div>
                <span data-uk-icon="icon: users; ratio: 1.4"></span>
                <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">Yield</h5>
                <span className="uk-text-small">Serves 4</span>
              </div>
            </div>

            <hr />

            <div data-uk-grid>
              <div className="uk-width-auto@s uk-text-small">
                <p className="uk-margin-small-top uk-margin-remove-bottom">
                  Created by <a href="#">Alex Williamns</a>
                </p>
                <span className="uk-text-muted">21 recipes</span>
              </div>

              <div className="uk-width-expand@s uk-flex uk-flex-middle uk-flex-right@s">
                <a
                  href="#"
                  className="uk-icon-link"
                  data-uk-icon="icon: plus-circle; ratio: 1.2"
                  data-uk-tooltip="title: Save Recipe"
                ></a>
                <a
                  href="#"
                  className="uk-icon-link uk-margin-left"
                  data-uk-icon="icon: cart; ratio: 1.2"
                  data-uk-tooltip="title: Shopping List"
                ></a>
                <a
                  href="#"
                  className="uk-icon-link uk-margin-left"
                  data-uk-icon="icon: print; ratio: 1.2"
                  data-uk-tooltip="title: Print Recipe"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeIntroComponent;
