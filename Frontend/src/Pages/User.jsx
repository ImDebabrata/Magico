import React from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";

const User = () => {
  return (
    <Container>
      <Header>User Info</Header>
      <UserBox>
        <FaUserAlt />
      </UserBox>
    </Container>
  );
};

const Container = styled.div``;
const Header = styled.h3``;
const UserBox = styled.div`
  width: 450px;
  height: 500px;
  margin: auto;
  border: 1px solid black;
  & > svg {
    border: 1px solid black;
    font-size: 7rem;
    border-radius: 50%;
    border-offset: 4px;
  }
`;

export default User;
