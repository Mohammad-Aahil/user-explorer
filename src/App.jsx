import React from "react";
import { useQuery } from "@tanstack/react-query";

const App = () => {
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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div>
      <h2> Users List </h2>

      {(data || []).map((user) => (
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
