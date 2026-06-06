import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  // For Search Input used for Filtering
  const [search, setSearch] = useState("");

  // Define UseQuery and using async Fn
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      // console.log(data);
      return res.json();
    },
  });

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
      />
      {filteredUsers.map((user) => (
        <div
          key={user.id}
          style={{ border: "1px solid gray", margin: "10px", padding: "5px" }}
        >
          <p>
            <strong>{user.name}</strong>
          </p>
          <p> {user.email} </p> <br />
        </div>
      ))}
    </div>
  );
};

export default App;
