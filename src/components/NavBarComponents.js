import styled from "styled-components";
import {Link} from "react-router-dom"

export const Nav = styled.nav`
 width: 100%;
 height: 80px;
 background-color: black;
 display: flex;
 flex-direction:column;`

export const Menu = styled.div`
flex: 70%;
display: flex;
align-items:center;
padding-left: 5%;
background-color:red;`


export const NavBarLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Arial, Helvetica, sans-serif, sans-serif;
    text-decoration: none;
    margin: 10px;
`




