import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DescriptionIcon from '@material-ui/icons/Description';

import './resource-item.styles.scss';

const ResourceItem = ({ title, url, type }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };
  return (
    <div
      className="resource-item-container"
      onClick={handleClick}
      title="download"
    >
      {type === 1 && <MailOutlineIcon color="primary" />}
      {type === 2 && <DescriptionIcon color="primary" />}
      <div>{title}</div>
      <CloudDownloadIcon style={{ marginLeft: 'auto' }} color="primary" />
    </div>
  );
};

export default ResourceItem;
