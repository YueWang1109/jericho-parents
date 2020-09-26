import React from 'react';
import Stop from '../../assets/stop.jpeg';
import Mission from '../mission/mission.component';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import './home-article.styles.scss';
const HomeArticle = () => {
  const matches = useMediaQuery('(max-width:650px)');
  return (
    <div className="home-article">
      <Mission />
      <iframe
        title="pr"
        src="https://player.vimeo.com/video/460724801"
        width="100%"
        height={matches ? '400' : '564'}
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
      <img src={Stop} alt="shelter" className="image-shelter" />
      <iframe
        title="rally"
        src="https://player.vimeo.com/video/460429175"
        width="100%"
        // height="564"
        height={matches ? '400' : '564'}
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
      <br />
    </div>
  );
};

export default HomeArticle;
