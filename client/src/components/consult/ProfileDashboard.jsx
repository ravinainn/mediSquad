import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditProfileScreen = ({ userDetails, onSave, onCancel }) => {
  const [editField, setEditField] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleEdit = (field) => {
    setEditField(field);
    setEditValue(userDetails[field] || '');
  };

  const handleSave = () => {
    if (editField) {
      onSave({ [editField]: editValue });
      setEditField(null);
    }
  };

  const editButtons = [
    { label: 'Change Name', field: 'name' },
    { label: 'Change Phone', field: 'phone' },
    { label: 'Change Email', field: 'email' },
    { label: 'Change Aadhaar', field: 'aadhaar' },
    { label: 'Change Password', field: 'password' },
  ];

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-medium">Edit Profile</h4>
      {editButtons.map(({ label, field }) => (
        <div key={field} className="flex items-center justify-between">
          <span>{label}</span>
          <button
            onClick={() => handleEdit(field)}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Edit
          </button>
        </div>
      ))}
      {editField && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            {`New ${editField.charAt(0).toUpperCase() + editField.slice(1)}:`}
          </label>
          <input
            type={editField === 'password' ? 'password' : 'text'}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={() => setEditField(null)}
              className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Save
            </button>
          </div>
        </div>
      )}
      <div className="mt-6">
        <button
          onClick={onCancel}
          className="w-full px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Back to Profile
        </button>
      </div>
    </div>
  );
};

const ProfileDashboard = ({ onClose }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [userDetails, setUserDetails] = useState({
    name: 'Sameer Joshi',
    email: 'sameer@gmail.com',
    phone: '9829519588',
    aadhaar: '1234567890',
  });
  const [isEditing, setIsEditing] = useState(false);

  const logs = [
    { doctor: 'Dr. Mashoor Gulati', date: '2024-08-01', report: 'report1.pdf' },
    { doctor: 'Dr. Jhatka', date: '2024-07-15', report: 'report2.pdf' },
  ];

  const handleSaveProfile = (updatedDetail) => {
    setUserDetails(prev => ({ ...prev, ...updatedDetail }));
    // typically send this updated details to backend
    console.log('Profile updated', updatedDetail);
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        alert("No user is logged in");
        return;
      }

      const res = await axios.get("http://localhost:5001/api/user/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("userToken");
      alert(res.data.message);
      onClose(); // Close the profile dashboard
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Logout error:", error);
      alert("Error logging out");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
        <div className="mt-3">
          <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">User Profile Dashboard</h3>
          
          {!isEditing && (
            <div className="mt-4 flex justify-center space-x-4">
              <button 
                className={`px-4 py-2 text-base font-medium rounded-md ${activeTab === 'profile' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </button>
              <button 
                className={`px-4 py-2 text-base font-medium rounded-md ${activeTab === 'logs' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setActiveTab('logs')}
              >
                Logs
              </button>
            </div>
          )}

          {activeTab === 'profile' && !isEditing && (
            <div className="mt-4">
              <div className="space-y-4">
                {Object.entries(userDetails).map(([key, value]) => (
                  <div key={key} className="flex items-center">
                    <span className="w-1/3 text-right mr-2 text-gray-600 capitalize">{key}:</span>
                    <span className="w-2/3 px-3 py-2">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center space-x-4">
                <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  Edit Profile
                </button>
                <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
                  Log out
                </button>
              </div>
            </div>
          )}

          {isEditing && (
            <EditProfileScreen 
              userDetails={userDetails}
              onSave={handleSaveProfile}
              onCancel={() => setIsEditing(false)}
            />
          )}

          {activeTab === 'logs' && !isEditing && (
            <div className="mt-4">
              <h4 className="text-md font-medium mb-2">Meeting History</h4>
              <div className="space-y-2">
                {logs.map((log, index) => (
                  <div key={index} className="border p-3 rounded-md">
                    <p><strong>Doctor:</strong> {log.doctor}</p>
                    <p><strong>Date:</strong> {log.date}</p>
                    <a href={log.report} className="text-blue-500 hover:underline">Download Report</a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!isEditing && (
            <div className="mt-6 flex justify-center">
              <button onClick={onClose} className="px-4 py-2 bg-gray-300 text-gray-700 text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300">
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;