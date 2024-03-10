import { z } from "zod";
import { UserAuthFormSchema } from "../helpers/validation/user.schema";

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
  photo: string;
}

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


export interface ICreatedUserRes {
  success: boolean,
  user_id : number,
  message : string
}

export type UserAuthFormFieldsType = z.infer<typeof UserAuthFormSchema>;
