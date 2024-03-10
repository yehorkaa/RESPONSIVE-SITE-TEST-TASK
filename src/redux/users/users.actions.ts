import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../services/users-service";
import { IGetUsersRes } from "./users.interface";
import {
  ICreatedUserRes,
  UserAuthFormFieldsType,
} from "../../types/user.types";

export const getUsers = createAsyncThunk<IGetUsersRes>(
  "users/get",
  async (_, thunkAPI) => {
    const res = await UserService.getUsers();
    if (!res.success) thunkAPI.rejectWithValue({});
    return res;
  }
);

export const addUser = createAsyncThunk<
  ICreatedUserRes,
  UserAuthFormFieldsType
>("users/post", async (body, thunkAPI) => {
  const res = await UserService.addUser(body);
  if (!res.success) thunkAPI.rejectWithValue({});
  thunkAPI.dispatch(getUsers());
  return res;
});

export const registerUser = createAsyncThunk("auth/register", async () => {
  try {
    return [];
  } catch (e) {
    return [];
  }
});
