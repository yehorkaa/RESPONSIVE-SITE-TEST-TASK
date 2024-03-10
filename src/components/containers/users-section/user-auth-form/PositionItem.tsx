import { FC } from "react";
import { IPosition } from "../../../../types/position.types";
import styles from "../UserSection.module.scss";
import cn from "classnames";
import { UseFormRegister } from "react-hook-form";
import { UserAuthFormFieldsType } from "../../../../types/user.types";


const PositionItem: FC<{ name: IPosition["name"], register: UseFormRegister<UserAuthFormFieldsType>, id: IPosition['id']}> = ({ name, register, id }) => {
  return (
    <label className={cn("p-primary-black", styles.position_item)}>
      <input type="radio" {...register('position')}  value={+id}/>
      <span>{name}</span>
    </label>
  );
};

export default PositionItem;
