import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../Redux/userSlice";

// const users = [
//   { name: "Sukhdev", email: "sukhdev.gmail.com", role: "User" },
//   { name: "Sukhdev", email: "sukhdev.gmail.com", role: "User" },
//   { name: "Sukhdev", email: "sukhdev.gmail.com", role: "Admin" },
//   { name: "Sukhdev", email: "sukhdev.gmail.com", role: "User" },
//   { name: "Jay", email: "sukhdev.gmail.com", role: "User" },
//   { name: "Sukhdev", email: "sukhdev.gmail.com", role: "User" },
//   { name: "Sukhdev", email: "Jay.gmail.com", role: "User" },
//   { name: "Sukhdev", email: "sukhdev.gmail.com", role: "User" },
//   { name: "Sukhdev", email: "sukhdev.gmail.com", role: "User" },
//   { name: "Sukhdev", email: "sukhdev.gmail.com", role: "User" },
//   { name: "Sukhdev", email: "sukhdev.gmail.com", role: "User" },
// ];

const Admin = () => {
  const dispatch = useDispatch();
  const {
    auth: { token },
    user: { allUser },
  } = useSelector((store) => store);
  console.log(allUser);
  console.log(token);

  useEffect(() => {
    dispatch(getUsers(token));
  }, []);
  return (
    <Container>
      <Heading>Admin Dashboard</Heading>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((user, id) => {
            return (
              <tr key={id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>Update</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  height: 500px;
  border: 1px solid black;
`;

const Heading = styled.h3``;

const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  /* border: 1px solid black; */
  & th,
  td {
    border: 1px solid grey;
  }
  margin: 30px auto;
`;

export default Admin;
