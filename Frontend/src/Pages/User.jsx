import React from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

const User = () => {
  const { name, email, role } = useSelector((store) => store.auth);
  return (
    <Container>
      <Header>User Info</Header>
      <UserBox>
        <FaUserAlt />
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Role: {role}</div>
        <button>Update</button>
      </UserBox>
    </Container>
  );
};

const Container = styled.div`
  margin: 35px 0;
`;
const Header = styled.h3``;
const UserBox = styled.div`
  width: 350px;
  padding: 20px;
  margin: auto;
  /* border: 1px solid black; */
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
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
