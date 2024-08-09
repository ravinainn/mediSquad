import React, { useState } from 'react';

const RegisterModal = ({ onClose, onNavigateToLogin }) => {
  const [isDoctor, setIsDoctor] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [specialization, setSpecialization] = useState('');

  const handleRegister = () => {
    console.log('Registering as', isDoctor ? 'doctor' : 'user', 'with', {
      name,
      email,
      phone,
      password,
      gender,
      aadhar,
      specialization,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative h-auto max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        {/* Toggle User Type */}
        <div className="mb-4 flex justify-center">
          <button
            className={`px-4 py-2 rounded-l-lg ${!isDoctor ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => setIsDoctor(false)}
          >
            User
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${isDoctor ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => setIsDoctor(true)}
          >
            Doctor
          </button>
        </div>

        {/* Form Fields */}
        <div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 p-2 rounded-lg w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="border border-gray-300 p-2 rounded-lg w-full"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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

          {/* Conditional Fields for Users */}
          {!isDoctor && (
            <>
              <div className="mb-4">
                <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                  Gender
                </label>
                <select
                  id="gender"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="aadhar" className="block text-gray-700 font-bold mb-2">
                  Aadhaar Number
                </label>
                <input
                  type="text"
                  id="aadhar"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  value={aadhar}
                  onChange={(e) => setAadhar(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          {/* Conditional Fields for Doctors */}
          {isDoctor && (
            <div className="mb-4">
              <label htmlFor="specialization" className="block text-gray-700 font-bold mb-2">
                Specialization
              </label>
              <input
                type="text"
                id="specialization"
                className="border border-gray-300 p-2 rounded-lg w-full"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                required
              />
            </div>
          )}
        </div>

        {/* Register Button */}
        <button
          className="bg-teal-500 text-white px-4 py-2 rounded-lg w-full hover:bg-teal-600"
          onClick={handleRegister}
        >
          Register
        </button>

        {/* Navigate to Login */}
        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-teal-500 hover:text-teal-600"
            onClick={onNavigateToLogin}
          >
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;