import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Map from '../../assets/about.png';
import JhsMap from '../../assets/JHSmap.jpeg';
import Poster from '../poster/poster.component';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import './about-article.styles.scss';

const AboutArticle = () => {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    const date = new Date();
    const ts = date.getTime();
    const last_ts = localStorage.getItem('ts');
    console.log('last_ts', last_ts);
    // if (!last_ts || ts - last_ts > 1000 * 60 * 60 * 24) {
    //   setIsOpen(true);
    //   localStorage.setItem('ts', ts);
    // }
    console.log(isOpen);
    // setTimeout(() => setIsOpen(false), 10000);
  }, []);
  const handleClose = () => {
    setIsOpen(false);
  };
  const matches = useMediaQuery('(max-width:800px)');

  return (
    <div className={matches ? 'about-article small' : 'about-article'}>
      <Modal
        open={isOpen}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <Poster handleClose={handleClose} />
        </div>
      </Modal>
      <div className="urgen">
        <img src={JhsMap} alt="map" className="img f" />
        <div>
          <p>⚠Our fellow Jericho Parents/Community Members,</p>
          <p>
            As you know, our committee has been working diligently on your
            behalf to voice our opposition to the opening of the Homeless
            Shelter in Jericho. We have obtained over 2000 signatures of fellow
            community members and have raised over $85k in support of our cause.
            To assist us in this fight, we retained one of Long Island’s
            pre-eminent law firms and, earlier today, retained a top notch
            Public Relations firm. We are in regular contact with Town of Oyster
            Bay officials.
          </p>
          <p>
            ⚠At the same time and of significant import, we have scheduled a
            <span className="red">Press Conference and Rally</span> in front of
            Jericho High School (in the circle) for tomorrow (
            <span className="red">at 11:00 a.m. Saturday, August 8, 2020</span>
            ). Town of Oyster Bay officials are aware, as is the media. We
            strongly believe that this press conference/rally will be covered
            extensively by the press, and as such, it is of great importance
            that we have a strong showing with as many community members
            appearing as possible. We know from all of the support that you have
            shown, both financially and through other means, how important this
            issue is to all of you, but now it’s time to get our thoughts out to
            the public through the media. Our PR team is certainly going to
            assist us with this. Please meet us tomorrow at 11am at the Jericho
            High School and show your support and impress upon all of your
            friends, neighbors and community members the importance of their
            appearance.
          </p>
          <p>Thank you for your continued support.</p>
          <p>Jericho Strong Committee</p>
        </div>
      </div>
      <br />
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
