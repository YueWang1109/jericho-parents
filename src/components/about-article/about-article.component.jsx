import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Map from '../../assets/about.png';
import stats from '../../assets/stats.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import './about-article.styles.scss';

const AboutArticle = () => {
  const matches = useMediaQuery('(max-width:800px)');

  return (
    <div className={matches ? 'about-article small' : 'about-article'}>
      {/* <div className="urgen"> */}
      {/* <div>
        <img src={stats} alt="map" className="img f" />
      </div>
      <div className="devider" /> */}
      <img src={Map} alt="map" className="img" />
      <div>
        <p>
          The <span className="big">Hampton Inn</span>, located at 120 Jericho
          Turnpike, has recently been sold to a private investor with plans to
          convert it into a homeless shelter. Local residents initially heard
          about this at the Jericho Board of Education meeting on July 23rd,
          2020. Renovation of the former hotel has already been undertaken, with
          the homeless shelter targeting to begin operations in August 2020.
        </p>
        <p>
          This plan has NEVER been communicated to the local community. Since
          July 23rd, local residents have been reaching out to County elected
          officials to obtain more facts.
        </p>
        <ul>
          <li>
            The Town of Oyster Bay was NOT aware of this until July 24th, 2020.
          </li>
          <li>
            Local Nassau County Legislator Arnold Drucker stated that he heard
            about this plan on July 23rd, 2020.
          </li>{' '}
          <li>
            According to Jericho School District officials, “…Jericho School
            District has NOT participated in the decision making process for
            this Facility,” and “Please be advised the Jericho School District
            was NOT contacted by CHI in January 2020 and as a matter of record
            we were NEVER contacted by CHI.” Please note that CHI stands for
            Community Housing Innovations, who manages this Hampton Inn
            transitional housing project.
          </li>
        </ul>
        <p>
          It is <span className="red">UNACCEPTABLE</span> that there was no
          communication and no transparency regarding the conversion of the
          Hampton Inn into a homeless shelter.
        </p>
      </div>
    </div>
  );
};

export default AboutArticle;
