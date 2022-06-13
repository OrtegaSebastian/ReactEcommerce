import React from 'react'
import { Container, Menu,MenuItem, Wrapper } from './NavBarComponents'
import CartWidget from './CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

// Chicos muy importante para esta entrega, 
// es definir un state en el container y luego usando 
// el set desde el contador pasar ese valor al container



const NavBar = () => {
  return (
    <Container>
      
        <Wrapper>
            <Link to = "/Cart">
              <button className='btn btn-outline-primary'>
                <CartWidget>
                </CartWidget>
              </button>
            </Link>
           <Menu>
                <MenuItem>
                <NavLink to="/" className={({isActive})=>isActive? "text-red": "clase2"}>INICIO</NavLink>
                </MenuItem>
                <MenuItem>
                <NavLink to="/sobrelaempresa">
                SOBRE LA EMPRESA
                </NavLink>
                </MenuItem>
                <MenuItem>
                <NavLink to ="/productos">
                PRODUCTOS      
                </NavLink>
                </MenuItem>
                <MenuItem>
                <NavLink to ="Contacto">
                CONTACTO
                </NavLink>
                </MenuItem>
            </Menu>
        </Wrapper>
    </Container>
  )
}

export default NavBar