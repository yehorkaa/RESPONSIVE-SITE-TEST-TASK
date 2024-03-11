import { FC } from "react";
import Box from "../../../ui/Box/Box";
import Avatar from "./Avatar";
import styles from "../UserSection.module.scss";
import { IUser } from "../../../../types/user.types";
import { getSlicedString } from "../../../../helpers";

const UserCard: FC<IUser> = ({ photo, name, email, phone, position }) => {
  return (
    <div className={styles.user_card}>
      <Box type="vert" className="p-primary-black">
        <Avatar src={photo} alt={name} />
        <p className={styles.name} data-tooltip={name}>{getSlicedString(name, 21)}</p>
        <p>{position}</p>
        <p data-tooltip={email}>{getSlicedString(email, 21)}</p>
        <p>{phone}</p>
      </Box>
    </div>
  );
};

export default UserCard;
