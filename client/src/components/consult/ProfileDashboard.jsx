import React from 'react';

const ProfileDashboard = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">User Profile</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              Manage your account here.
            </p>
          </div>
          <div className="mt-4 flex flex-col space-y-2">
            <button className="px-4 py-2 bg-blue-400 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Dashboard
            </button>
            <button className="px-4 py-2 bg-red-400 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
              Logout
            </button>
          </div>
          <div className="mt-4">
            <button onClick={onClose} className="px-4 py-2 bg-gray-300 text-gray-700 text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;