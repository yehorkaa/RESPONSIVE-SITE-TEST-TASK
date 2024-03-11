import { FC } from "react";
import Box from "../../../ui/Box/Box";
import Title from "../../../ui/Title/Title";
import styles from '../UserSection.module.scss'

interface ISuccessfulAuth {
    message: string;
}

const SuccessfulAuth: FC<ISuccessfulAuth> = ({ message }) => {
    return (
        <div className="succesful_auth">
            <Box type="vert" className={styles.succesful_auth_container}>
                <Title tag="h2" className="h-primary-black">
                    {message}
                </Title>
                <div>
                    <img src="/RESPONSIVE-SITE-TEST-TASK/src/assets/success-image.png" alt="successfull registration photo" />
                </div>
            </Box>
        </div>
    )
}


export default SuccessfulAuth;