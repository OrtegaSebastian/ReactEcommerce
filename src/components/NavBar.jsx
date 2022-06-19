import React from 'react'
import { Nav, Menu  } from './NavBarComponents'
import CartWidget from './CartWidget/CartWidget'
// import { Link } from 'react-router-dom'
import { NavBarLink } from './NavBarComponents'



const NavBar = () => {
  return (
    <Nav>
      <NavBarLink to="/Cart">
        <CartWidget></CartWidget>
      </NavBarLink>
      <Menu>
        <NavBarLink to="/">INICIO</NavBarLink>

        <NavBarLink to="/sobrelaempresa">SOBRE LA EMPRESA</NavBarLink>

        <NavBarLink to="/category/panaderia">PANADERIA</NavBarLink>

        <NavBarLink to="/category/ferreteria">FERRETERIA</NavBarLink>

        <NavBarLink to="/category/verduleria">VERDULERIA</NavBarLink>

        <NavBarLink to="Contacto">CONTACTO</NavBarLink>
      </Menu>
    </Nav>
  );
}

export default NavBar