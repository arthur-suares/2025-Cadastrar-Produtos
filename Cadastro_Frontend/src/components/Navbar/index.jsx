import React from "react";
import { Link } from 'react-router-dom';
import {
    NavbarContainer,
    NavList,
    NavItem,
    StyledLink
} from "./styled.js"

function Navbar() {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <StyledLink to="/">Cadastrar Produtos</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/listarProdutos">Listar Produtos</StyledLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
}

export default Navbar;
