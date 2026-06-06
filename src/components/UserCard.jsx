import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="border mb-3 rounded-lg p-4 shadow hover">
      <h3 className="font-bold"> {user.name} </h3>
      <p> {user.email} </p>
    </div>
  );
};

export default UserCard;
