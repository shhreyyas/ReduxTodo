import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const usersList = useSelector((state) => state.users);
  const dispatch = useDispatch();
    const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill in all fields");
      return;
    }
    dispatch(
      addUser({
        id: usersList[usersList.length - 1].id + 1,
        name: name,
        email: email,
      })
    );
    setName("");
    setEmail("");
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Create New User
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-blue-400 rounded-lg bg-blue-50 text-blue-800 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter full name"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-purple-400 rounded-lg bg-purple-50 text-purple-800 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter email address"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
