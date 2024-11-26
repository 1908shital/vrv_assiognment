// src/pages/Users.jsx
import React, { useState } from "react";
import UserTable from "../components/UserTable";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: true },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: false },
  ]);

  const handleEdit = (user) => {
    console.log("Edit:", user);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Users;
