import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Poster from '../poster/poster.component';
import Email from '../email/checkout.component';

import './home-article.styles.scss';
const HomeArticle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="home-article">
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Email handleClose={handleClose} />
      </Modal>
      <Poster />
      <p>
        The Hampton Inn, located at 120 Jericho Turnpike, Jericho, was recently
        sold to an investor and leased to Community Housing Innovations.
      </p>
      <p>
        The property is currently being renovated, and the Nassau County
        Department of Social Services will turn the property into a transitional
        housing facility that will accommodate 80 homeless families to move in.
        This property (which is located less than a mile from the Cantiague
        Elementary School) is not zoned for stays longer than 30 days and is
        being pushed forward by the developers and County illegally.{' '}
      </p>
      <p>
        If this shelter is put into place, it will have long term, far reaching
        impacts on our school district and community.
      </p>
      <p>
        Every legislator and office that has been contacted claims to have known
        nothing about any of this. We are being lied to.
      </p>
      <p>
        We urge you to please join in this petition to support our efforts to
        force local officials to STOP this facility from opening in order to
        help preserve the safety and well being of our families.
      </p>
      <div className="contact-btn" onClick={handleClick}>
        Count Me In!
      </div>
    </div>
  );
};

export default HomeArticle;
