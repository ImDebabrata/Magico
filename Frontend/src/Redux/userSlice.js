import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "Authentication",
  initialState: {
    isLoading: false,
    isError: false,
    allUser: [],
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
    setAllUser(state, action) {
      state.allUser = action.payload;
    },
  },
});

export const { processingRequest, errorlog, signupSuccess, loginSuccess } =
  userSlice.actions;

export const getUsers = (payload) => (dispatch) => {
  dispatch(processingRequest());
  return axios
    .get(`${process.env.REACT_APP_API}/admin/alluser`, {
      params: {
        dekhoBhai: "just for test",
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default userSlice.reducer;
