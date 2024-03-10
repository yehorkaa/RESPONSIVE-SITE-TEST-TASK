import { FC } from "react";
import { IPositionResponse } from "../../../../types/position.types";
import PositionItem from "./PositionItem";
import styles from "../UserSection.module.scss";
import { UseFormRegister } from "react-hook-form";
import { UserAuthFormFieldsType } from "../../../../types/user.types";
// UseFormRegister<FieldValues>

interface IPositions {
  positions: IPositionResponse["positions"];
  register: UseFormRegister<UserAuthFormFieldsType>;
}

const Positions: FC<IPositions> = ({ positions, register }) => {
  return (
    <div className={styles.positions_container}>
      <span className="p-primary-black">Select your position</span>
      <ul>
        {positions?.map(({ id, name }) => (
          <li key={id}>
            <PositionItem name={name} register={register} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Positions;
