import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
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

export const { processingRequest, errorlog, setAllUser } = userSlice.actions;

export const getUsers = (payload) => (dispatch) => {
  dispatch(processingRequest());
  return axios
    .get(`${process.env.REACT_APP_API}/admin/alluser`, {
      params: {
        token: payload,
      },
    })
    .then((res) => dispatch(setAllUser(res.data.res)))
    .catch((err) => dispatch(errorlog()));
};

export default userSlice.reducer;
