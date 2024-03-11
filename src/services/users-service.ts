import { IGetUsersRes, UserAuthFormFieldsType } from "../types/user.types";
import { AuthService } from "./auth-service";

const BASE_URL = "https://frontend-test-assignment-api.abz.agency/api/v1/users";

export const UserService = {
  async getUsers(): Promise<IGetUsersRes> {
    const response = await fetch(`${BASE_URL}?page=1&count=15`, {
      method: "GET",
    });
    return response.json();
  },

  async addUser(body: UserAuthFormFieldsType) {
    const formData = new FormData();
    formData.append("name", body.name);
    formData.append("phone", body.phone);
    formData.append("email", body.email);
    formData.append("position_id", "" + body.position);
    formData.append("photo", body.file);
    try {
      const token = AuthService.getToken();
      if (token) {
        const response = await fetch(BASE_URL, {
          method: "POST",
          body: formData,
          headers: { Token: token },
        });
        return response.json();
      } else {
        return { success: false, message: 'You are not authorized' }
      }
    } catch {
      return { success: false, message: 'Failed to register' };
    }
  },
};

