import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideosRequest } from 'Src/actions/videoActions';

import videoImage from 'Public/assets/img/video-image.png';

const VideosComponent = () => {
  const videos = useSelector((state) => state.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideosRequest());
  }, []);

  return (
    <div className="uk-section uk-section-default">
      <div className="uk-container">
        <div data-uk-grid>
          <div className="uk-width-expand">
            <h2>Videos</h2>
          </div>
        </div>

        <div className="uk-child-width-1-2 uk-child-width-1-4@s" data-uk-grid>
          {
            videos?.map((video, videoIndex) => (
              <div key={videoIndex}>
                <div className="uk-card uk-card-video">
                  <div className="uk-inline uk-light">
                    <img
                      className="uk-border-rounded-large"
                      src={videoImage}
                      alt="Video Title"
                    />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-large"></div>
                    <div className="uk-position-center">
                      <span data-uk-icon="icon: play-circle; ratio: 3.4"></span>
                    </div>

                    <div className="uk-position-small uk-position-bottom-left">
                      <h5 className="uk-margin-small-bottom">Business Presentation Course</h5>
                    </div>
                  </div>

                  <a href={video?.link} className="uk-position-cover" target="_blank"></a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default VideosComponent;
