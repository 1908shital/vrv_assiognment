// src/components/DashboardLayout.jsx
import { Link } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">RBAC Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-3">
              <Link
                to="/users"
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                Users
              </Link>
            </li>
            <li className="mb-3">
              <Link
                to="/roles"
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                Roles
              </Link>
            </li>
            <li>
              <Link
                to="/permissions"
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                Permissions
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
};

export default DashboardLayout;
