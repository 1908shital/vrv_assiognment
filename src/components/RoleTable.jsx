// src/components/RoleTable.jsx
const RoleTable = ({ roles, onEdit, onDelete }) => (
    <div className="overflow-x-auto bg-white p-4 shadow-md rounded-lg">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-2">Role</th>
            <th className="p-2">Permissions</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="hover:bg-gray-100">
              <td className="p-2">{role.name}</td>
              <td className="p-2">{role.permissions.join(", ")}</td>
              <td className="p-2">
                <button
                  onClick={() => onEdit(role)}
                  className="bg-blue-500 text-white py-1 px-3 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(role.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  export default RoleTable;
  