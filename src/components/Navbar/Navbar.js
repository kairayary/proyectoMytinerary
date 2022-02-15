import React, { useState } from "react";
import {Link as LinkRouter} from "react-router-dom";
import {
  Container,
  Cover,
  LogoNavbar,
  ItemLink,
  Menu,
  MenuItem,
  MobileIcon,
} from "./NavbarPartes";
import { GiEarthAmerica } from "react-icons/gi";
import { FaUserCircle, FaBars  } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
    const [ showMobileMenu, setShowMobileMenu] = useState (false);
  return (
    <Container>
      <Cover>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoNavbar>
            <GiEarthAmerica  />
            <h2 value={{ style: {  fontfamily: "Dancing Script', cursive"} }}>MyTINERARY</h2>
          </LogoNavbar>
          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
           <FaBars />
          </MobileIcon>
          <Menu open={showMobileMenu}>
            <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <LinkRouter to="/"> 
              <ItemLink>HOME</ItemLink>
              </LinkRouter>
            </MenuItem>

            <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <LinkRouter to="/Cities">
            <ItemLink>CITIES</ItemLink>
            </LinkRouter>
            </MenuItem>

            <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <LinkRouter to ="/Login">
              <ItemLink>
                <FaUserCircle />
              </ItemLink>
              </LinkRouter>
            </MenuItem>
            
          </Menu>
        </IconContext.Provider>
      </Cover>
    </Container>
  );
};
export default Navbar;
