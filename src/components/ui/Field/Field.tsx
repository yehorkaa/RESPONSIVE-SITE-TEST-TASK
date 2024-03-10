import { FC, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import styles from "./Field.module.scss";
import cn from "classnames";
import { FieldError, UseFormRegister } from "react-hook-form";
import { UserAuthFormFieldsType } from "../../../types/user.types";

interface IField extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type: HTMLInputTypeAttribute;
  hint?: string;
  error?: FieldError["message"] | string;
  register: UseFormRegister<UserAuthFormFieldsType>;
  name: keyof UserAuthFormFieldsType;
}

const Field: FC<IField> = ({
  className,
  type,
  error,
  hint,
  placeholder,
  register,
  name,
}) => {
  return (
    <div className={cn(styles.field, className, error && styles.error)}>
      <label>
        <input type={type} placeholder={placeholder} {...register(name)} />
        {hint && !error && <span className={styles.hint}>{hint}</span>}
        {error && <span className={styles.error}>{error}</span>}
      </label>
    </div>
  );
};

export default Field;
