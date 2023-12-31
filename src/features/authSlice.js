// features/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "../api/auth";

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials) => {
    // console.log(credentials);
    const response = await loginUser(credentials);
    console.log(response.data.userData.username);
    const result = response.data.userData.username;
    localStorage.setItem("username", JSON.stringify(result));
    return result;
  }
);

export const logoutAsync = createAsyncThunk("auth/logout", async () => {
  //   const response = await logoutUser();
  console.log("you are about to be logged out");
  //   return response;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: JSON.parse(localStorage.getItem("user")) || null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.username = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.username = null;
      });
  },
});

export default authSlice.reducer;
