import { FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Box.module.scss";
import cn from 'classnames';


interface IBox extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  type: 'horiz' | 'vert';
  className?: string;
}

const Box: FC<IBox> = ({ children, type, className, ...rest }) => {
  return <div className={cn(styles[type], className)} {...rest}>{children}</div>;
};

export default Box;
