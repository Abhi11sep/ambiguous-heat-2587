import React from "react";
import "./NavbarStyle.css";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaSearch,
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
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../Assests/logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCalendarCheck,
  faClose,
  faCoins,
  faHomeAlt,
  faLocationDot,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <div className="whole">
      <div className="top">
        <p>
          introducing Crystal & Gold pro! - purchase your plan{" "}
          <span style={{ color: "orange" }}>here</span>
        </p>
      </div>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <a href="/">
              <img src={logo} alt="logo_image" width={150}></img>
            </a>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
          id="navbar"
          style={{ marginTop: "10px" }}
        >
          <ul>
            <li style={{ fontSize: "14px" }}>
              <NavLink to="/">
                <a href="/" className="active">
                  <FontAwesomeIcon icon={faHomeAlt} />
                  &nbsp; FREE TRY AT HOME
                </a>
              </NavLink>
            </li>
            <li style={{ fontSize: "14px" }}>
              <NavLink to="/">
                <a href="/">
                  <FontAwesomeIcon icon={faStore} />
                  &nbsp; FIND STORE
                </a>
              </NavLink>
            </li>
            <li style={{ fontSize: "14px" }}>
              <NavLink to="/">
                <a href="/">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                  &nbsp; PLAN OF PURCHASE
                </a>
              </NavLink>
            </li>
            <li style={{ fontSize: "14px" }}>
              <NavLink to="/">
                <a href="/">
                  <FontAwesomeIcon icon={faCoins} />
                  &nbsp; BUY DIGITAL GOLD
                </a>
              </NavLink>
            </li>
            <li style={{ fontSize: "12px" }}>
              <form>
                <input
                  style={{
                    borderRadius: "5px 0px 0px 5px",
                    width: "200px",
                    fontSize: "14px",
                    padding: "6px 10px",
                  }}
                  type="text"
                  placeholder="Search..."
                />
                <button
                  style={{
                    backgroundColor: "#aa5af1",
                    borderRadius: "0px 5px 5px 0px",
                    padding: "10px 10px",
                    marginTop: "5px",
                  }}
                  type="submit"
                >
                  <FaSearch />
                </button>
              </form>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media" style={{ paddingTop: "10px" }}>
          <ul className="social-media-desktop">
            <li>
              <Link style={{ fontSize: "14px" }} to="/">
                <LocationOnIcon />
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <PersonIcon />
              </Link>
            </li>
            <li>
              <Link to="/wishlist">
                <FavoriteIcon />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <ShoppingBasketOutlinedIcon />
              </Link>
            </li>
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
          <li>
            <Link to="/ring">NEW ARRIVALS</Link>
          </li>
          <li>
            <Link to="/ring">RINGS</Link>
          </li>
          <li>
            <Link to="/">EARRINGS</Link>
          </li>
          <li>
            <Link to="/">BRACELETS & BANGLES</Link>
          </li>
          <li>
            <Link to="/">SOLITARIES</Link>
          </li>
          <li>
            <Link to="/">MANGALSUTRA</Link>
          </li>
          <li>
            <Link to="/">READY TO SHIP</Link>
          </li>
          <li>
            <Link to="/">KIDS</Link>
          </li>
          <li>
            <Link to="/">OTHERS JEWELLERY</Link>
          </li>
          <li>
            <Link to="/">GIFTING</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
