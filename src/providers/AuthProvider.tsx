import { FC, ReactNode, useEffect } from "react";
import { AuthService } from "../services/auth-service";

interface IAuthProvider {
  children: ReactNode;
}

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
  useEffect(() => {
    AuthService.login();
    const intervalId = setInterval(() => {
      AuthService.login();
    }, 30 * 60 * 1000); // getting new token every 30 minuets
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
