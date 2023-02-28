import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../Redux/authSlice";

import {
  Heading,
  InputContainer,
  InputLabel,
  Input,
  SubmitButton,
  FormBox,
  SwitchSlider,
  SwitchContainer,
  SwitchLabel,
  Switch,
} from "./Signup";

const initialUserInfo = {
  email: "",
  password: "",
};

const Login = () => {
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  useSelector((store) => console.log(store));
  const dispatch = useDispatch();
  const handleSwitchChange = () => {
    setUserInfo({
      ...userInfo,
      role: userInfo.role === "user" ? "admin" : "user",
    });
  };

  const handleUserInfo = (e) => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    dispatch(loginUser(userInfo))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <FormBox>
      <Heading>Login</Heading>
      <form onSubmit={handleFormSubmit}>
        {/* Email */}
        <InputContainer>
          <InputLabel top={userInfo.email.length} htmlFor="email">
            Enter Email *
          </InputLabel>
          <Input
            value={userInfo.email}
            name="email"
            onChange={handleUserInfo}
            type="text"
            id="email"
          />
        </InputContainer>
        {/* Password */}
        <InputContainer>
          <InputLabel top={userInfo.password.length} htmlFor="password">
            Enter Password *
          </InputLabel>
          <Input
            value={userInfo.password}
            name="password"
            onChange={handleUserInfo}
            type="text"
            id="password"
          />
        </InputContainer>
        {/* Role */}
        {/* <SwitchContainer>
          <SwitchLabel htmlFor="user">User</SwitchLabel>
          <Switch
            id="user"
            checked={userInfo.role === "admin"}
            onChange={handleSwitchChange}
          />
          <SwitchSlider onClick={handleSwitchChange} />
          <SwitchLabel htmlFor="admin">Admin</SwitchLabel>
          <Switch
            id="admin"
            checked={userInfo.role === "admin"}
            onChange={handleSwitchChange}
          />
        </SwitchContainer> */}
        {/* Submit */}
        <SubmitButton type="submit">Login</SubmitButton>
      </form>
    </FormBox>
  );
};

export default Login;
