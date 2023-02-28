import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../Redux/userSlice";

const users = [
  { name: "Sukhdev", email: "sukhdev.gmail.com", role: "User" },
  { name: "Sukhdev", email: "sukhdev.gmail.com", role: "User" },
  { name: "Sukhdev", email: "sukhdev.gmail.com", role: "Admin" },
  { name: "Sukhdev", email: "sukhdev.gmail.com", role: "User" },
  { name: "Jay", email: "sukhdev.gmail.com", role: "User" },
  { name: "Sukhdev", email: "sukhdev.gmail.com", role: "User" },
  { name: "Sukhdev", email: "Jay.gmail.com", role: "User" },
  { name: "Sukhdev", email: "sukhdev.gmail.com", role: "User" },
  { name: "Sukhdev", email: "sukhdev.gmail.com", role: "User" },
  { name: "Sukhdev", email: "sukhdev.gmail.com", role: "User" },
  { name: "Sukhdev", email: "sukhdev.gmail.com", role: "User" },
];

const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <Container>
      <Heading>Admin Dashboard</Heading>
      <Grid>
        {users.map((user, id) => {
          return (
            <GridBox key={id}>
              <h5>Name: {user.name}</h5>
              <div>Email: {user.email}</div>
              <div>Role: {user.role}</div>
            </GridBox>
          );
        })}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  height: 500px;
  border: 1px solid black;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`;

const GridBox = styled.div`
  border: 1px solid black;
  text-align: left;
`;

const Heading = styled.h3``;

export default Admin;
