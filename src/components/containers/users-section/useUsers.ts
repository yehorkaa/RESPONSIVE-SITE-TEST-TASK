import { useEffect, useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
useActions;

const useUsers = () => {
  const {
    users: { users },
    isLoading,
    error,
    message,
    added_successfully,
  } = useTypedSelector((state) => state.user);
  const { getUsers } = useActions();
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { users, handleShowMore, visibleCount, isLoading, error, message, added_successfully };
};

export default useUsers;
