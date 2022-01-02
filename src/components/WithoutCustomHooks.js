import React, { useEffect, useState } from "react";

function WithoutCustomHook() {
  const [users, setUsers] = useState();

  const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h1>Without Custom Hook</h1>
      {!users ? (
        <div>Loading...</div>
      ) : users.length === 0 ? (
        <div>No users</div>
      ) : (
        <ol>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default WithoutCustomHook;
