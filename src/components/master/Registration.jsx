"use client"
import React, { useState } from 'react';

const Registration = () => {
  const [step, setStep] = useState(1); // Track the current step
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    otp: '',
    division: '',
    district: '',
    upazilla: '',
    profession: '',
    mobileNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-400 p-8 rounded-lg shadow-md">
        {step === 1 && (
          <div>
            <h2 className="text-2xl mb-4 text-center">Registration Form</h2>

            <form onSubmit={handleSubmit}>

              <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" className="w-full border p-2 rounded-md mb-4" />

              <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" className="w-full border p-2 rounded-md mb-4" />

              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="w-full border p-2 rounded-md mb-4" />

              <div className="flex justify-end">
                <button type="button" onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded-md">Next</button>
              </div>
            </form>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl mb-4 text-center">Email Verification</h2>

            <form onSubmit={handleSubmit}>
              <input type="text" name="otp" value={formData.otp} onChange={handleInputChange} placeholder="Enter OTP" className="w-full border p-2 rounded-md mb-4" />

              <div className="flex justify-between">
                <button type="button" onClick={handlePrev} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Previous</button>
                <button type="button" onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded-md">Next</button>
              </div>
            </form>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl mb-4 text-center">Address</h2>

            <form onSubmit={handleSubmit}>
              <input type="text" name="division" value={formData.division} onChange={handleInputChange} placeholder="Division" className="w-full border p-2 rounded-md mb-4" />
              <input type="text" name="district" value={formData.district} onChange={handleInputChange} placeholder="District" className="w-full border p-2 rounded-md mb-4" />
              <input type="text" name="upazilla" value={formData.upazilla} onChange={handleInputChange} placeholder="Upazilla" className="w-full border p-2 rounded-md mb-4" />
              <input type="text" name="profession" value={formData.profession} onChange={handleInputChange} placeholder="Profession" className="w-full border p-2 rounded-md mb-4" />
              <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} placeholder="Mobile Number" className="w-full border p-2 rounded-md mb-4" />

              <div className="flex justify-between">
                <button type="button" onClick={handlePrev} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Previous</button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;
