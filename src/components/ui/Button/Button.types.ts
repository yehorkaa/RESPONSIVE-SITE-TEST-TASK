import { ReactNode, MouseEvent, ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  className?: string;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit";
}
