import styled from "styled-components";
import { Link } from "react-router-dom"; // Import do Link necessário aqui

export const NavbarContainer = styled.nav`
  background-color: #006343;
  padding: 10px 20px;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
`;

export const NavItem = styled.li``;

export const StyledLink = styled(Link)` // Agora funciona corretamente
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #a8e6cf;
  }

  &:active {
    color: #ff8b94;
  }
`;
