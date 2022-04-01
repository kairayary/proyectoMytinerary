import React, { useState } from "react";
import {Link as LinkRouter} from "react-router-dom";
import { useStateValue } from "../../StateProvider";//prueba
import axios from "axios";
import { actionType } from "../../reducer";
import swal from 'sweetalert';
import "./Navbar.css"

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
import { SiHomebridge } from "react-icons/si"


const Navbar = () => {

    const [{ user }, dispatch] = useStateValue();//prueba
    const [ showMobileMenu, setShowMobileMenu] = useState (false);

    async function cerrarSesion(){
       console.log(user)
      const email= user.email
      console.log(email)
      await axios.post("http://localhost:4000/api/signout", {email})//paso el parametro para que su funcion lo busque y va a dar la respuesta de que el usuario se descpnecto
      .then(response => {
        console.log(response)
        if (response.data.success) {
            localStorage.removeItem("token")
            dispatch({
                type: actionType.USER,
                user: null
            })
            //  alert(response.data.response)
             swal({
              title: "Closed Session",
              text: response.data.response,
              icon: "success",
            })
         }
    })
    }

  return (
    <Container>
      <Cover>
        <IconContext.Provider value={{ style: { fontSize: "3em" } }}>
          <LogoNavbar>
            
            <h2 className="LogoTitulo" value={ {style: {  fontfamily: "Dancing Script!import"}}}> The Best of Trip ... Is Always the Next One</h2>
          </LogoNavbar>
          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
           <FaBars />
          </MobileIcon>
          <Menu open={showMobileMenu}>
            <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <LinkRouter to="/"> 
              <ItemLink><SiHomebridge/></ItemLink>
              </LinkRouter>
            </MenuItem>

            <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <LinkRouter to="/Cities">
            <ItemLink><GiEarthAmerica/></ItemLink>
            </LinkRouter>
            </MenuItem>

            <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {!user?
              <LinkRouter to ="/Login">
                <ItemLink><FaUserCircle /></ItemLink>
              </LinkRouter>
            :<div onClick={()=>cerrarSesion()}><ItemLink><FaUserSlash/></ItemLink></div>}  
            </MenuItem>
            
    
          </Menu>
        </IconContext.Provider>
      </Cover>
    </Container>
  );
};
export default Navbar;
