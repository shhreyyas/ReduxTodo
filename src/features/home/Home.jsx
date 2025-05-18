import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../redux/userSlice";
import { subscribe } from "../../redux/subscriptionSlice";

const Home = () => {
  const navigate = useNavigate();
  const usersList = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [users, setUsers] = useState(usersList);

  useEffect(() => {
    setUsers(usersList);
  }, [usersList]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      dispatch(deleteUser(id));
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-user/${id}`);
  };

  const handleCreate = () => {
    navigate("/create-user");
  };

  const handleSubscribe = (user) => {
    dispatch(subscribe(user));
    navigate(`/verify-user/${user.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">User List</h2>
          <button
            onClick={handleCreate}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            + Create User
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  ID
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Email
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  <td className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700">
                    {user.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm font-semibold text-blue-700">
                    {user.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm font-medium text-purple-600">
                    {user.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center space-x-2">
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="px-3 py-1 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="px-3 py-1 text-sm text-white bg-red-600 hover:bg-red-700 rounded"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleSubscribe(user)}
                      className="px-3 py-1 text-sm text-white bg-red-600 hover:bg-red-700 rounded"
                    >
                      Subscribe
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
