import React from 'react'
import './NavbarStyle.css'
import { NavLink } from 'react-router-dom';
import {
  FaFacebookSquare, FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../Assests/logo.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCalendarCheck, faClose, faCoins, faHomeAlt, faLocationDot, faStore } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Navbar = () => {

  const [showMediaIcons, setShowMediaIcons] = useState(false);


  return (
    <div className='whole'>
      <div className='top'>
        <p>introducing Crystal & Gold pro! - purchase your plan <span style={{ color: 'orange' }}>here</span></p>
      </div>

      {/* <nav>
        <a href='/'><img src={logo} alt="logo_image" width={150}></img></a>
        <div>
          <ul id="navbar">
            <li ><a href='/' className='active'><FontAwesomeIcon icon={faHomeAlt} />&nbsp; FREE TRY AT HOME</a></li>
            <li><a href='/'><FontAwesomeIcon icon={faStore} />&nbsp; FIND STORE</a></li>
            <li><a href='/'><FontAwesomeIcon icon={faCalendarCheck} />&nbsp; PLAN OF PURCHASE</a></li>
            <li><a href='/'><FontAwesomeIcon icon={faCoins} />&nbsp; BUY DIGITAL GOLD</a></li>
            <li><form>
              <input style={{ borderRadius: '5px 0px 0px 5px' }} type="search" placeholder="Search..." />
              <button style={{ backgroundColor: '#aa5af1', borderRadius: '0px 5px 5px 0px' }} type="submit">search</button>
            </form>
            </li>
            <li><a href='/'><FontAwesomeIcon icon={faLocationDot} />&nbsp; PINCODE</a></li>
            <li><a href='/'><PersonIcon /></a></li>
            <li><a href='/'><FavoriteIcon /></a></li>
            <li><a href='/'><ShoppingBasketOutlinedIcon /></a></li>
          </ul>
        </div>
      </nav> */}
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <a href='/'><img src={logo} alt="logo_image" width={150}></img></a>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          } id='navbar'>
          <ul>
            <li style={{ fontSize: '14px' }}>
              <NavLink to="/"><a href='/' className='active'><FontAwesomeIcon icon={faHomeAlt} />&nbsp; FREE TRY AT HOME</a></NavLink>
            </li>
            <li style={{ fontSize: '14px' }}>
              <NavLink to="/about"><a href='/'><FontAwesomeIcon icon={faStore} />&nbsp; FIND STORE</a></NavLink>
            </li>
            <li style={{ fontSize: '14px' }}>
              <NavLink to="/service"><a href='/'><FontAwesomeIcon icon={faCalendarCheck} />&nbsp; PLAN OF PURCHASE</a></NavLink>
            </li>
            <li style={{ fontSize: '14px' }}>
              <NavLink to="/contact"><a href='/'><FontAwesomeIcon icon={faCoins} />&nbsp; BUY DIGITAL GOLD</a></NavLink>
            </li>
            <li style={{ fontSize: '12px' }}><form>
              <input style={{ borderRadius: '5px 0px 0px 5px', width: '150px' }} type="search" placeholder="Search..." />
              <button style={{ backgroundColor: '#aa5af1', borderRadius: '0px 5px 5px 0px' }} type="submit">search</button>
            </form>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li><a style={{ fontSize: '14px' }} href='/'><LocationOnIcon /></a></li>
            <li><a href='/'><PersonIcon /></a></li>
            <li><a href='/'><FavoriteIcon /></a></li>
            <li><a href='/'><ShoppingBasketOutlinedIcon /></a></li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      <div>
        <ul id="navbar1">
          <li><a href='/'>NEW ARRIVALS</a></li>
          <li><a href='/'>RINGS</a></li>
          <li><a href='/'>EARRINGS</a></li>
          <li><a href='/'>BRACELETS & BANGLES</a></li>
          <li><a href='/'>SOLITARIES</a></li>
          <li><a href='/'>MANGALSUTRA</a></li>
          <li><a href='/'>READY TO SHIP</a></li>
          <li><a href='/'>KIDS</a></li>
          <li><a href='/'>OTHERS JEWELLERY</a></li>
          <li><a href='/'>GIFTING</a></li>
        </ul>
      </div>
    </div>
  )
}


export default Navbar