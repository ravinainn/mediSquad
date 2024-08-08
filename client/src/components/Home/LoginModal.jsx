import React, { useState } from 'react';

const LoginModal = ({ onClose }) => {
  const [loginType, setLoginType] = useState('patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in as', loginType, 'with', email, password);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <button
            className={`px-4 py-2 rounded-l-lg ${
              loginType === 'patient' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => setLoginType('patient')}
          >
            Patient
          </button>
          <button
            className={`px-4 py-2 ${
              loginType === 'doctor' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => setLoginType('doctor')}
          >
            Doctor
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${
              loginType === 'admin' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => setLoginType('admin')}
          >
            Admin
          </button>
        </div>

        <div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 p-2 rounded-lg w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 p-2 rounded-lg w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          className="bg-teal-500 text-white px-4 py-2 rounded-lg w-full hover:bg-teal-600"
          onClick={handleLogin}
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <a href="#" className="text-teal-500 hover:text-teal-600">
            Sign Up / Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;