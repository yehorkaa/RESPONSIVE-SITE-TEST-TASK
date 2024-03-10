import styles from "../UserSection.module.scss";
import UserCard from "./UserCard";
import Box from "../../../ui/Box/Box";
import Button from "../../../ui/Button/Button";
import Title from "../../../ui/Title/Title";
import useUsers from "../useUsers";
import Loader from "../../../ui/Loader/Loader";

const Users = () => {
  const { users, handleShowMore, visibleCount, isLoading } = useUsers();
  return (
    <Box type="vert" className={styles.users_list}>
      <Title className="h-primary-black" tag="h2">
        Working with GET request
      </Title>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.grid_container}>
          {users?.slice(0, visibleCount)?.map((item) => (
            <UserCard {...item} key={item.id} />
          ))}
        </div>
      )}
      {users && users.length > visibleCount && (
        <Button className="btn-primary" onClick={handleShowMore}>
          <span>Show more</span>
        </Button>
      )}
    </Box>
  );
};

export default Users;
