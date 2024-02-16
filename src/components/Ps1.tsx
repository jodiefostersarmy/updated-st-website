import React from 'react';
import config from '../../config.json';

export const Ps1 = () => {
  return (
    <div>
      <span className="text-light-yellow dark:text-dark-gray">
        {config.ps1_username}
      </span>
      <span className="text-light-gray dark:text-dark-white">@</span>
      <span className="text-light-white dark:text-dark-orange">
        {config.ps1_hostname}
      </span>
      <span className="text-light-white dark:text-dark-white">:$ ~ </span>
    </div>
  );
};

export default Ps1;
