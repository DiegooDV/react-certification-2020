import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import userDefault from '../../assets/userDefault.png';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faTimes,
  faBars,
  faHeart,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import Switch from '@material-ui/core/Switch';

const Header = () => {
  const [click, setClick] = useState(false);
  const [switchMode, setSwitchMode] = useState(false);
  const handleClick = () => {
    setClick(!click)
    click ? document.body.style.overflow = "visible" : document.body.style.overflow = "hidden";
  };
  const closeMobileMenu = () => setClick(false);
  const handleSwitchMode = () => setSwitchMode(!switchMode);

  return (
    <>
      <div className={switchMode ? 'header dark' : 'header'}>
        <div className="logo-nav">
          <a href="#">
            <div className="logo-container">
              <img className="logo" src={logo} alt="logo" />
              <h1>&nbsp;MyTube</h1>
            </div>
          </a>

          <ul  className={`nav-options ${click ? "active" : ""} ${
            switchMode ? "dark" : ""
          }`}>
            <li className="mobile-option" onClick={closeMobileMenu}>
              <div className="inline-elements">
                <h6 style={{color: "white"}}>Favorites&nbsp;&nbsp;</h6>
                <FontAwesomeIcon className="icon" icon={faHeart} style={{ color: 'red' }} />
              </div>
            </li>

            <li className="mobile-option user-info">
              <br />
              <div className="inline-elements">
                <img className="user-image" src={userDefault} alt="User" />
                <h6 style={{color: "white"}}>&nbsp;&nbsp;Anonymous</h6>
              </div>
              <div className="inline-elements">
                {switchMode ? (
                  <>
                    <FontAwesomeIcon className="icon" icon={faMoon} />
                    <Switch
                      className="mobile-option"
                      checked={switchMode}
                      onChange={handleSwitchMode}
                    />
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon className="icon" icon={faSun} />
                    <Switch
                      className="mobile-option"
                      checked={switchMode}
                      onChange={handleSwitchMode}
                    />
                  </>
                )}
              </div>
            </li>
          </ul>
        </div>

        <div className="search-bar-nav">
          <input className={switchMode ? 'search-bar dark' : 'search-bar'} type="text" />
          <FontAwesomeIcon className="icon" icon={faSearch} />
        </div>

        <ul className="right-menu inline-elements">
          {switchMode ? (
            <>
              <li className="option" style={{ margin: '0px' }}>
                <FontAwesomeIcon className="icon" icon={faMoon} />
              </li>
              <li className="option" style={{ margin: '0px' }}>
                <Switch checked={switchMode} onChange={handleSwitchMode} />
              </li>
            </>
          ) : (
            <>
              <li className="option" style={{ margin: '0px' }}>
                <FontAwesomeIcon className="icon" icon={faSun} />
              </li>
              <li className="option" style={{ margin: '0px' }}>
                <Switch checked={switchMode} onChange={handleSwitchMode} />
              </li>
            </>
          )}
          <li className="option">
            <FontAwesomeIcon
              className="icon"
              icon={faHeart}
              style={{ color: 'red', width:"30px", height:"30px" }}
            />
          </li>
          <li className="option">
            <img className="user-image" src={userDefault} alt="User" />
          </li>
        </ul>

        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon className="icon" icon={faTimes} style={{ width:"30px", height:"30px" }} />
          ) : (
            <FontAwesomeIcon className="icon" icon={faBars} style={{ width:"30px", height:"30px" }} />
          )}
        </div>
      </div>

      <div
        className={switchMode ? 'mobile-search-bar-nav dark' : 'mobile-search-bar-nav'}
      >
        <input className={switchMode ? 'search-bar dark' : 'search-bar'} type="text" />
        <FontAwesomeIcon className="icon" icon={faSearch} />
      </div>
    </>
  );
};

export default Header;
