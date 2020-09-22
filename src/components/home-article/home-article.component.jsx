import React from 'react';
import Stop from '../../assets/stop.jpeg';
import Fact1 from '../../assets/fact1.png';
import Fact2 from '../../assets/fact2.png';
import Mission from '../mission/mission.component';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import './home-article.styles.scss';
const HomeArticle = () => {
  const matches = useMediaQuery('(max-width:650px)');
  return (
    <div className="home-article">
      <Mission />
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
      <img src={Fact1} alt="fact1" className="image-shelter" />
      <img src={Fact2} alt="fact2" className="image-shelter" />
    </div>
  );
};

export default HomeArticle;
