import { FC, ReactNode } from "react";

interface ILink {
  children: ReactNode | string;
  className?: string;
  href: string;
}

const Link: FC<ILink> = ({ children, className, href }) => {
  return (
    <a className={className} href={href} style={{ textAlign: 'center' }}>
      {children}
    </a>
  );
};

export default Link;
