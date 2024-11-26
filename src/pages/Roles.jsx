// src/pages/Roles.jsx
import React, { useState } from "react";
import RoleTable from "../components/RoleTable";

const Roles = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);

  const handleEdit = (role) => {
    console.log("Edit:", role);
  };

  const handleDelete = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Roles</h1>
      <RoleTable roles={roles} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Roles;
