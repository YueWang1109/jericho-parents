import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';

import './contact-item.styles.scss';

const ContactItem = ({ info: { name, email, phone } }) => (
  <div className="contact-item">
    <div className="name">{name}</div>
    <div className="contact">
      <EmailIcon />
      <a
        href={`${
          email.substring(0, 4).toLowerCase() === 'http' ? '' : 'mailto: '
        } ${email}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span>{email}</span>
      </a>
    </div>
    <div className="contact">
      <PhoneIcon />
      {phone}
    </div>
  </div>
);

export default ContactItem;
