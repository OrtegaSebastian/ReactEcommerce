import React from 'react'
import { Container, Menu,MenuItem, MenuItemLink, Wrapper } from './NavBarComponents'
import CartWidget from './CartWidget/CartWidget'


// Chicos muy importante para esta entrega, 
// es definir un state en el container y luego usando 
// el set desde el contador pasar ese valor al container



const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <CartWidget>
              
            </CartWidget>

            <Menu>
                <MenuItem>
                <MenuItemLink>
                INICIO
                </MenuItemLink>
                </MenuItem>
                <MenuItem>
                <MenuItemLink>
                SOBRE LA EMPRESA
                </MenuItemLink>
                </MenuItem>
                <MenuItem>
                <MenuItemLink>
                PRODUCTOS      
                </MenuItemLink>
                </MenuItem>
                <MenuItem>
                <MenuItemLink>
                CONTACTO
                </MenuItemLink>
                </MenuItem>
            </Menu>
        </Wrapper>
    </Container>
  )
}

export default NavBar