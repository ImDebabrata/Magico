import React from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";

const User = () => {
  return (
    <Container>
      <Header>User Info</Header>
      <UserBox>
        <FaUserAlt />
        <div>Name: Debabrata</div>
        <div>Email: datta@gmail.com</div>
        <div>Role: User</div>
        <button>Update</button>
      </UserBox>
    </Container>
  );
};

const Container = styled.div``;
const Header = styled.h3``;
const UserBox = styled.div`
  width: 350px;
  padding: 20px;
  margin: auto;
  border: 1px solid black;
  & > svg {
    border: 1px solid black;
    font-size: 5.5rem;
    border-radius: 50%;
    padding: 4px;
    /* margin: 7px 0; */
  }
  & > div {
    margin: 20px 0;
  }
  & > button {
    padding: 5px;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    background-color: #6dab3c;
  }
`;

export default User;
