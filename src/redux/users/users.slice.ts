import { createSlice } from "@reduxjs/toolkit";
import { addUser, getUsers } from "./users.actions";
import { IUserState } from "./users.interface";
import { ICreatedUserRes, IUser } from "../../types/user.types";

const initialState: IUserState = {
  users: {
    success: false,
    total_pages: 0,
    total_users: 0,
    count: 0,
    page: 0,
    links: {
      next_url: null,
      prev_url: null,
    },
    users: [],
  },
  isLoading: false,
  error: false,
  added_successfully: false,
  message: ''
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        payload.users = (payload.users as IUser[]).sort(
          (a, b) => b.registration_timestamp - a.registration_timestamp
        );
        state.users = payload;
        state.isLoading = false;
      })
      .addCase(getUsers.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, { payload }) => {
        return { ...state, isLoading: false, error: false, added_successfully: true, message: payload.message }
      })
      .addCase(addUser.rejected, (state, { payload }) => {
        return { ...state, isLoading: false, error: true, message: (payload as ICreatedUserRes).message }
      });
  },
});

export const { reducer, actions } = usersSlice;
