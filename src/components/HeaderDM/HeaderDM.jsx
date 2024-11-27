import React from 'react';
import LocalTimeWidget from '../LocalTimeWidget/LocalTimeWidget';
import './HeaderDM.css';
import PhotoName from '../../images/PhotoName.webp';

function HeaderDM() {

  return (
    <header className="headerDM">
      <div className="headerDMleft">
        <img className="logoHeader" src={PhotoName} alt="logo" />
        <p className='pheader'>DM</p>
      </div>

      <div className="headerDMright">
        <LocalTimeWidget />
      </div>
    </header>
  );
}

export default HeaderDM;
