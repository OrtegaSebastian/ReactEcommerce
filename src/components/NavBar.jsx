import React from 'react'
import { Nav, Menu  } from './NavBarComponents'
import CartWidget from './CartWidget/CartWidget'
import { Link } from 'react-router-dom'



const NavBar = () => {
  return (
    <Nav>
      <Link to="/Cart">
        <CartWidget></CartWidget>
      </Link>
      <Menu>
        <Link to="/">INICIO</Link>

        <Link to="/sobrelaempresa">SOBRE LA EMPRESA</Link>

        <Link to="/category/almacen">ALMACEN</Link>

        <Link to="/category/ferreteria">FERRETERIA</Link>

        <Link to="Contacto">CONTACTO</Link>
      </Menu>
    </Nav>
  );
}

export default NavBar