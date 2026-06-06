import { useQuery } from "@tanstack/react-query";
import React, { useState, useMemo } from "react";
import useUsers from "./hooks/useUsers";
import UserList from "./components/UserList";

const App = () => {
  // For Search Input used for Filtering
  const [search, setSearch] = useState("");

  // gets the data from useQuery
  const { data, isLoading, error } = useUsers();

  // Filtering Users
  const filteredUsers = useMemo(() => {
    return (data || []).filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [data, search]);

  // Conditonal returns after hooks...
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div>
      <h2> Users List </h2> <br /> <br />
      <input
        type="text"
        placeholder="Type users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <UserList users={filteredUsers} />
      {/* {filteredUsers.map((user) => (
        <div
          key={user.id}
          style={{ border: "1px solid gray", margin: "10px", padding: "5px" }}
        >
          <p>
            <strong>{user.name}</strong>
          </p>
          <p> {user.email} </p> <br />
        </div>
      ))} */}
    </div>
  );
};

export default App;
