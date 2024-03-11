import { IUser } from "../../types/user.types";

export interface IGetUsersRes {
  success: boolean;
  total_pages: number;
  total_users: number;
  count: number;
  page: number;
  links: {
    next_url: null | string;
    prev_url: null | string;
  };
  users: IUser[] | null;
}


export interface IUserState {
    users: IGetUsersRes,
    isLoading: boolean,
    error: boolean,
    message: string,
    added_successfully: boolean,
}