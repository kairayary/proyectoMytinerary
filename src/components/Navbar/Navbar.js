import React, { useState } from "react";
import {Link as LinkRouter} from "react-router-dom";
import { useStateValue } from "../../StateProvider";//prueba
import axios from "axios";


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
import { FaUserCircle, FaBars, FaUserSlash } from "react-icons/fa";
import { IconContext } from "react-icons/lib";


const Navbar = () => {

    const [{ user }, dispatch] = useStateValue()//prueba
    const [ showMobileMenu, setShowMobileMenu] = useState (false);

    async function cerrarSesion(){
      // console.log(user.datosUser.email)
      const email= user.datosUser.email
      console.log(email)
     await axios.post("http://localhost:4000/api/signout", {email})//paso el parametro para que su funcion lo busque y va a dar la respuesta de que el usuario se descpnecto
     .then(response =>
        console.log(response)
      )


    }

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
                <ItemLink><FaUserCircle /></ItemLink>
              </LinkRouter>
              
            </MenuItem>
            
            <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {!user?
              <LinkRouter to ="/Login"><ItemLink><FaUserSlash/></ItemLink></LinkRouter>
              :<div onClick={()=>cerrarSesion(window.location.reload(true))}><ItemLink><FaUserSlash/></ItemLink></div>}
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Cover>
    </Container>
  );
};
export default Navbar;
