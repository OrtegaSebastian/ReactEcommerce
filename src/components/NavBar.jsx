import React from 'react'
import { Container, Menu,MenuItem, MenuItemLink, Wrapper } from './NavBarComponents'
import CartWidget from './CartWidget/CartWidget'


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