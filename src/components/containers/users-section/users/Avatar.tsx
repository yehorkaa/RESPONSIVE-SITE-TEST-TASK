import { FC } from "react";
import styles from '../UserSection.module.scss'

interface IAvatar {
    src: string;
    alt: string;
}

const Avatar: FC<IAvatar> = ({ src, alt }) => {
  return (
    <div className={styles.avatar_container}>
        <img src={src} alt={`${alt} photo`}/>
    </div>
  )
}

export default Avatar