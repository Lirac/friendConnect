import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer";
import { BASEURL } from "@/constants";
import { User } from "@/models/User";
import { initialStateType, statusType } from "@/models/Login";

const initialState: initialStateType = {
  user: null,
  status: "idle",
  error: "",
};

export const loginUser = createAsyncThunk(
  "users/login",
  async (email: string, { rejectWithValue }) => {
    const response = await fetch(`${BASEURL}/login?email=${email}`);
    if (!response.ok) {
      return rejectWithValue("User does not exists");
    }
    return response.json();
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const getUser = (state: WritableDraft<initialStateType>): WritableDraft<User | null> =>
  state.user;
export const getLoginStatus = (state: WritableDraft<initialStateType>): statusType => state.status;
export default userSlice.reducer;
