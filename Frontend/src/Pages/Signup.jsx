import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signupUser } from "../Redux/authSlice";
import { useNavigate } from "react-router-dom";
import { MdError } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { ImSpinner3 } from "react-icons/im";

const initialUserInfo = {
  name: "",
  email: "",
  role: "user",
  password: "",
};

const Signup = () => {
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [showToast, setShowToast] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isError, isLoading } = useSelector((store) => store.auth);

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
    dispatch(signupUser(userInfo)).then((res) => {
      if (res.type === "Authentication/loginSuccess") {
        setShowToast(res.payload.res);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setShowToast(res.payload);
      }
      setTimeout(() => {
        setShowToast("");
      }, 2000);
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
        <Heading>Signup</Heading>
        <form onSubmit={handleFormSubmit}>
          {/* Name */}
          <InputContainer>
            <InputLabel top={userInfo.name.length} htmlFor="name">
              Enter Name *
            </InputLabel>
            <Input
              value={userInfo.name}
              name="name"
              onChange={handleUserInfo}
              type="text"
              id="name"
            />
          </InputContainer>
          {/* Email */}
          <InputContainer>
            <InputLabel top={userInfo.email.length} htmlFor="email">
              Enter Email *
            </InputLabel>
            <Input
              value={userInfo.email}
              name="email"
              onChange={handleUserInfo}
              type="email"
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
              type="password"
              id="password"
            />
          </InputContainer>
          {/* Role */}
          <SwitchContainer>
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
          </SwitchContainer>
          {/* Submit */}
          <SubmitButton type="submit">
            {isLoading ? <ImSpinner3 /> : "Signup"}
          </SubmitButton>
        </form>
      </FormBox>
    </>
  );
};

export const FormBox = styled.div`
  position: relative;
  width: 350px;
  /* border: 1px solid black; */
  overflow: hidden;
  border-radius: 7px;
  margin: 30px auto;
  padding: 20px 20px 30px 20px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 70px;
    z-index: -1;
    top: 0;
    left: 0;
    background-color: #6dab3c;
  }
`;

export const Heading = styled.h4`
  text-align: center;
  /* margin: 20px 0; */
  font-size: 1.5rem;
  color: white;
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 30px 0;
  //   border: 1px solid black;
  :focus-within {
    color: black;
    outline: 1px solid grey;
    outline-offset: 3px;
    border-radius: 4px;
    & > label {
      top: -8px;
    }
  }
`;

export const Input = styled.input`
  padding: 0 12px;
  border: 1px solid #94969f;
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 4px;
  :focus {
    border: 1px solid black;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  font-size: 12px;
  background-color: white;
  top: ${(length) => (length.top > 0 ? "-8px" : "11px")};
  left: 12px;
  user-select: none;
  transition-duration: 0.1s;
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const SwitchLabel = styled.label`
  /* margin-right: 1rem; */
  font-size: 1rem;
`;

export const Switch = styled.input.attrs({ type: "checkbox" })`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + span {
    background-color: #4f8327;
  }
`;

export const SwitchSlider = styled.span`
  height: 1.5rem;
  width: 3rem;
  border-radius: 1.5rem;
  background-color: grey;
  position: relative;
  transition: background-color 0.2s ease;
  &::before {
    content: "";
    position: absolute;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    background-color: white;
    top: 0.125rem;
    left: 0.125rem;
    transition: transform 0.2s ease;
  }
  ${Switch}:checked + &::before {
    transform: translateX(1.5rem);
  }
`;

export const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #6dab3c;
  width: 100%;
  color: white;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  &:focus {
    background-color: #4f8327;
  }
  & > svg {
    scale: 1.5;
    animation: rotation 2s infinite linear;
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
  }
`;

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

export default Signup;
