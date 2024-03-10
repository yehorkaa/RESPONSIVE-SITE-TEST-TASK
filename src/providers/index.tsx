import { Provider } from "react-redux";
import { store } from "../redux/store";
import { FC, ReactNode } from "react";
import AuthProvider from "./AuthProvider";

const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <AuthProvider> {children}</AuthProvider>
    </Provider>
  );
};

export default MainProvider;
