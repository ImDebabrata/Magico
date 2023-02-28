import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../Redux/authSlice";
import { useNavigate } from "react-router-dom";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdError } from "react-icons/md";
import styled from "styled-components";

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
  const [showToast, setShowToast] = useState("");
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const { isError } = useSelector((store) => store.auth);
  const navigate = useNavigate();
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
    dispatch(loginUser(userInfo)).then((res) => {
      if (res.type === "Authentication/loginSuccess") {
        setShowToast(res.payload.res);
        if (res.payload.role === "admin") {
          setTimeout(() => {
            navigate("/admin");
          }, 2000);
        } else {
          setTimeout(() => {
            navigate("/user");
          }, 2000);
        }
      } else {
        setShowToast(res.payload);
        setTimeout(() => {
          setShowToast("");
        }, 5000);
      }
    });
  };
  return (
    <>
      <ToastBox
        alertType={isError ? "red" : "#38a169"}
        top={showToast ? "10px" : "-15%"}
      >
        {isError ? <MdError /> : <BsFillPatchCheckFill />}
        <div color="white" fsize="18px">
          {showToast}
        </div>
      </ToastBox>
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
    </>
  );
};

export const ToastBox = styled.div`
  position: absolute;
  left: 50%;
  transition: 500ms linear;
  top: ${(style) => style.top};
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  padding: 10px;
  min-width: 246px;
  gap: 5px;
  background-color: ${(style) => style.alertType};
  border-radius: 7px;
  & > svg {
    display: block;
    width: 30px;
    height: 30px;
    color: white;
  }
  & > div {
    color: white;
    font-size: 18px;
  }
`;

export default Login;
