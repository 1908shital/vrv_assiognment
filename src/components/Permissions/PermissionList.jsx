// src/components/PermissionList.jsx
import "./PermissionList.css";

const PermissionList = ({ permissions, onAdd, onDelete }) => (
  <div className="permission-list-container">
    <h2 className="permission-list-title">Manage Permissions</h2>
    <div className="permission-list">
      {permissions.map((permission, index) => (
        <div key={index} className="permission-card">
          <span className="permission-name">{permission}</span>
          <button
            onClick={() => onDelete(permission)}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
    <button onClick={onAdd} className="add-button">
      Add New Permission
    </button>
  </div>
);

export default PermissionList;
