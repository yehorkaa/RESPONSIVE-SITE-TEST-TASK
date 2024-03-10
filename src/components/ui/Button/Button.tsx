import { FC } from "react";
import { IButton } from "./Button.types";
import styles from "./Button.module.scss";
import cn from "classnames";



const Button: FC<IButton> = ({ children, type, className, onClick, ...rest }) => {
  return (
    <button
      className={cn(styles.base, className)}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
