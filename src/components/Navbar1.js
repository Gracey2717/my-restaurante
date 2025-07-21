import React from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, href: "#home" },
    { text: "About", icon: <InfoIcon />, href: "#about" },
    {
      text: "Testimonies",
      icon: <CommentRoundedIcon />,
      href: "#testimonials",
    },
    { text: "Contact", icon: <PhoneRoundedIcon />, href: "#contact" },
    { text: "Cart", icon: <ShoppingCartRoundedIcon />, href: "#" },
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo-container">
        <h1>iCROCHET</h1>
      </div>

      {/* Links (desktop only) */}
      <div className="navbar-links-container" id="nav">
        <Link to="/">Home</Link>
        <a href="#about">About</a>
        <a href="#testimonials">Testimonies</a>
        <a href="#contact">Contact</a>
        <Link href="#">
          <BsCart2 className="navbar-cart-icon" />
        </Link>
        <button
          className="primary-button"
          onClick={() =>
            window.open(
              "https://wa.me/2347039020234?text=I'm%20interested%20in%20booking%20a%20crochet%20style",
              "_blank"
            )
          }
        >
          Bookings Now
        </button>
      </div>
      {/* Hamburger Icon (mobile) */}
      <div className="menu-icon" onClick={() => setOpenMenu(true)}>
        <HiOutlineBars3 size={30} />
      </div>

      {/* Drawer Menu (mobile only) */}
      <Drawer anchor="right" open={openMenu} onClose={() => setOpenMenu(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          {menuOptions.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton components="a" href={item.href}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
