// src/pages/Permissions.jsx
import React, { useState } from "react";
import PermissionList from "../components/Permissions/PermissionList";

const Permissions = () => {
  const [permissions, setPermissions] = useState(["Read", "Write", "Delete"]);

  const handleAdd = () => {
    const newPermission = prompt("Enter new permission:");
    if (newPermission) {
      setPermissions([...permissions, newPermission]);
    }
  };

  const handleDelete = (permission) => {
    setPermissions(permissions.filter((p) => p !== permission));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Permissions</h1>
      <PermissionList
        permissions={permissions}
        onAdd={handleAdd}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Permissions;
