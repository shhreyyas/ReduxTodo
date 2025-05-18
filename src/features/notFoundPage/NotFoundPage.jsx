import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <img
        src="https://illustrations.popsy.co/gray/error-404.svg"
        alt="404 Not Found"
        className="w-80 mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-gray-600 text-center mb-6 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFoundPage;
