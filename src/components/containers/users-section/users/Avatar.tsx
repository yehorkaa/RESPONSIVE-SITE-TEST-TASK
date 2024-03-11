import { FC, useState } from "react";
import styles from '../UserSection.module.scss'

interface IAvatar {
  src: string;
  fallbackSrc?: string;
  alt: string;
}

const Avatar: FC<IAvatar> = ({ src, alt, fallbackSrc = '/RESPONSIVE-SITE-TEST-TASK/src/assets/Vector.png' }) => {
  
  const [imageSrc, setImageSrc] = useState(src);
  const handleImageError = () => {
    setImageSrc(fallbackSrc);
  };

  return (
    <div className={styles.avatar_container}>
      <img src={imageSrc} onError={handleImageError} alt={`${alt} photo`} />
    </div>
  )
}

export default Avatar