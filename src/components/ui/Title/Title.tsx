import { FC, ReactNode, createElement } from "react";
import styles from './Title.module.scss';

interface ITitle {
  className: string;
  children: ReactNode | string;
  tag: string;
}

const Title: FC<ITitle> = ({ tag, className, children }) => {
  return <div className={styles.title}>{createElement(tag, { className }, children)}</div>;
};

export default Title;
