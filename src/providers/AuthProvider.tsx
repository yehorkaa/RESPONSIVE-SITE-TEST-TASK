import { FC, ReactNode, useEffect } from "react";
import { AuthService } from "../services/auth-service";

interface IAuthProvider {
  children: ReactNode;
}

const AuthProvider: FC<IAuthProvider> = ({ children }) => {

    useEffect(() => {
        if (!AuthService.isLoggedIn()) AuthService.login();
    }, [])

  return <>{children}</>;
};

export default AuthProvider;