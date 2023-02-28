import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Authentication",
  initialState: {
    isLoading: false,
    isError: false,
    token: null,
    name: null,
    email: null,
    role: null,
  },
  reducers: {
    processingRequest(state, action) {
      state.isLoading = true;
      state.isError = false;
    },
    errorlog(state, action) {
      state.isError = true;
      state.isLoading = false;
    },
    signupSuccess(state, action) {
      state.isLoading = false;
      state.isError = false;
    },
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.isLoading = false;
      state.isError = false;
    },
  },
});

export const { processingRequest, errorlog, signupSuccess, loginSuccess } =
  authSlice.actions;

export const loginUser = (payload) => (dispatch) => {
  dispatch(processingRequest());
  return axios
    .post(`${process.env.REACT_APP_API}/login`, payload)
    .then((res) => dispatch(loginSuccess(res.data)))
    .catch((err) => dispatch(errorlog(err.response.data.res)));
};
export const signupUser = (payload) => (dispatch) => {
  dispatch(processingRequest());
  return axios
    .post(`${process.env.REACT_APP_API}/signup`, payload)
    .then((res) => dispatch(signupSuccess(res.data.res)))
    .catch((err) => dispatch(errorlog(err.response.data.res)));
};
export default authSlice.reducer;
