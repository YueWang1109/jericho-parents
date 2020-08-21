import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import './resource-item.styles.scss';

const ResourceItem = ({ title, url }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };
  return (
    <>
      <Tooltip title="download">
        <div className="resource-item-container" onClick={handleClick}>
          <div>{title}</div>
          <div style={{ color: 'blue' }}>
            <CloudDownloadIcon />
          </div>
        </div>
      </Tooltip>
    </>
  );
};

export default ResourceItem;
