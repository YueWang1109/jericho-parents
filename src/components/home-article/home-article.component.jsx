import React from 'react';
import Stop from '../../assets/stop.jpeg';
import Newsday from '../../assets/newsday.mp4';
import Mission from '../mission/mission.component';

import './home-article.styles.scss';
const HomeArticle = () => {
  return (
    <div className="home-article">
      <Mission />
      <img src={Stop} alt="shelter" className="image-shelter" />
      <iframe
        title="rally"
        src="https://player.vimeo.com/video/460429175"
        width="100%"
        height="564"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default HomeArticle;
