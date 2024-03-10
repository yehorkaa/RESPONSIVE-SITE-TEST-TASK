import Box from "../../ui/Box/Box";
import UserAuthForm from "./user-auth-form/UserAuthForm";
import Users from "./users/Users";
import styles from "./UserSection.module.scss";

const UsersSection = () => {
  return (
    <section className={styles.user_section} id='users'>
      <div className="container">
        <Box type="vert" className={styles.user_section_content}>
          <Users />
          <UserAuthForm />
        </Box>
      </div>
    </section>
  );
};

export default UsersSection;
