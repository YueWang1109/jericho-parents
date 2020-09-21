import React from 'react';
import Population from '../../assets/population.png';
import Homeless from '../../assets/homeless.png';
import ShelterMap from '../../assets/sheltermap.png';
import Mission from '../mission/mission.component';

import './home-article.styles.scss';
const HomeArticle = () => {
  return (
    <div className="home-article">
      <Mission />
      <h1>Important Information You Need to Know !</h1>
      <div className="image-container">
        <img src={Population} alt="population" />
        <img src={Homeless} alt="homeless" />
      </div>
      <p>
        According to CHI: “Nassau County currently has 43 residential shelters.
        27 of those are family shelters, which cannot accommodate many larger
        families, according to Nancy Nunziata, commissioner of the Nassau County
        department of social service. At the moment,{' '}
        <span className="underscore">
          250 families reside in those shelters
        </span>
        , whose services are largely provided by nonprofit organizations. But{' '}
        <span className="underscore">
          another 104 families are in motels and without additional housing
          services around the county.
        </span>
        ”
      </p>
      <p>
        Around <span className="red bold">50</span> families currently reside in
        four motel facilities in Jericho near the former Hampton Inn, if we are
        having additional 80 families, there will be{' '}
        <span className="underscore bold">
          total 130 homeless families live in Jericho.
        </span>
      </p>
      <p>
        Jericho has total population of 13,567, which is only{' '}
        <span className="red bold">1%</span> of Nassau County’s Population
        (1.357 million ) and has already hosted{' '}
        <span className="bold">20%</span> of Nassau County’s homeless families.
        It is proposed to take <span className="red bold">52%</span> of Nassau
        County’s homeless families.
      </p>
      <p>
        The question is if Jericho takes the 80 out of 104 families without
        additional housing services, where the next 24 go?
      </p>
      <img src={ShelterMap} alt="shelter" className="image-shelter" />
    </div>
  );
};

export default HomeArticle;
