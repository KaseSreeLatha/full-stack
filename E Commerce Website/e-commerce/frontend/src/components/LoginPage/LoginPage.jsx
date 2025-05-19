import axios from 'axios';
import React, { useState } from 'react';

const LoginPage = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState();

  const handleSubmit = () => {
    axios.post('http://localhost:8080/api/users', { name, phone, gender })
      .then(() => {
        console.log('added');
      })
      .catch((error) => console.error("Error adding user:", error));
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md space-y-4">
      <div>
        <label className="block text-xl font-medium mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div>
        <label className="block text-xl font-medium mb-2">Phone Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div>
        <label className="block text-xl font-medium mb-2">Gender</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="Male"
              checked={gender === 'Male'}
              onChange={(e) => setGender(e.target.value)}
              className="mr-2"
            />
            Male
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="Female"
              checked={gender === 'Female'}
              onChange={(e) => setGender(e.target.value)}
              className="mr-2"
            />
            Female
          </label>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
