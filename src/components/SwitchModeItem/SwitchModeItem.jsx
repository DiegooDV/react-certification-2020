import React from 'react';
import Switch from '@material-ui/core/Switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SwitchModeItem = ({ icon, checkedStatus, onChange, isMobile }) => {
  if (isMobile) {
    return (
      <>
        <FontAwesomeIcon className="icon" icon={icon} />
        <Switch className="mobile-option" checked={checkedStatus} onChange={onChange} />
      </>
    );
  } else {
    return (
      <>
        <li className="option" style={{ margin: '0px' }}>
          <FontAwesomeIcon className="icon" icon={icon} />
        </li>
        <li className="option" style={{ margin: '0px' }}>
          <Switch checked={checkedStatus} onChange={onChange} />
        </li>
      </>
    );
  }
};

export default SwitchModeItem;
