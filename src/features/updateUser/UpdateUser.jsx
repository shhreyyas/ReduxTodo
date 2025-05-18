import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser } from "../../redux/userSlice";

const UpdateUser = () => {
  const { id } = useParams();
  const usersList = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ id: '', name: "", email: "" });

  useEffect(() => {
    const foundUser = usersList.find((u) => u.id === parseInt(id));
    if (foundUser) {
      setUser({id: foundUser.id, name: foundUser.name, email: foundUser.email });
    } else {
      alert("User not found");
      navigate("/");
    }
  }, [id, navigate, usersList]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email) {
      alert("Please fill in all fields");
      return;
    }
    dispatch(
      updateUser({
        id: user.id,
        name: user.name,
        email: user.email,
      })
    );
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Update User
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-400 rounded-lg bg-blue-50 text-blue-800 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-purple-400 rounded-lg bg-purple-50 text-purple-800 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
