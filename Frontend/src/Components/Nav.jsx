import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <NavBar>
      <Header>Es Magico</Header>
      <NavLink to={"/"}>Login</NavLink>
      <NavLink to={"/signup"}>Signup</NavLink>
      <NavLink to={"/admin"}>Admin</NavLink>
      <NavLink to={"/user"}>User</NavLink>
    </NavBar>
  );
};

const NavBar = styled.nav`
  display: flex;
  gap: 10px;
  justify-content: space-around;
  background-color: #6dab3c;
  padding: 10px 0;
  & > a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`;

const Header = styled.h4`
  text-align: left;
  flex-basis: 60%;
  color: white;
`;

export default Nav;
