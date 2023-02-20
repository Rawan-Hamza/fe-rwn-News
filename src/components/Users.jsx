import { useEffect, useState } from "react";
import { getUsers } from "./Api";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

  return (
    <ul className="user-list">
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        users.map((user) => {
          return (
            <li className="user-card" key={user.username}>
              <img
                src={user.avatar_url}
                alt={`${user.username} avatar`}
                id="user-avatar"
              />
              <p>{user.name}</p>
              <p>{user.username}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Users;
