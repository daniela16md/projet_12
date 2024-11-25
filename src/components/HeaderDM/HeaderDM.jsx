import React from 'react';
import LocalTimeWidget from '../LocalTimeWidget/LocalTimeWidget';
import PhotoName from '../../images/PhotoName.webp';
import './HeaderDM.css'; 

function HeaderDM() {
  return (
    <div className="headerDM">
      <div className="headerDMleft">
        <img className="logoHeader" src={PhotoName} alt="logo" /> 
      </div>
      <div className="headerDMright">
        <LocalTimeWidget />
      </div>
    </div>
  );
}

export default HeaderDM;
