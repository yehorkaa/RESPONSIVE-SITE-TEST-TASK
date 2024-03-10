import Cookies from "js-cookie";
import { ILoginResponse, TokenType } from "../types/auth.types";

const BASE_URL = "https://frontend-test-assignment-api.abz.agency/api/v1/token";

export const AuthService = {
  isLoggedIn(): TokenType {
    return Cookies.get("token");
  },

  async login(): Promise<ILoginResponse> {
    const res = await fetch(BASE_URL, { method: 'GET' });
    const data = await res.json();
    if (!data.success) return { success: false, token: undefined };
    Cookies.set("token", data.token);
    return data;
  },

  getToken() {
    if (this.isLoggedIn()) {
      return Cookies.get("token");
    }
  },
};
