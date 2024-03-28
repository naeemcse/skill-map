"use client";
import React, { useState } from "react";
import {ErrorToast, GetEmail, IsEmail, IsEmpty, SetEmail, SetOTP, SuccessToast} from "@/utility/FormHelper";
import {useRouter} from "next/navigation";

const VerifyOTP = () => {
  let router=useRouter()
  const [formData, setFormData] = useState({
    email:GetEmail(),
    otp: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options={method:'POST', body:JSON.stringify(formData)}
    let res=await (await fetch(`/api/user/verifyOTP`,options)).json();
   
    if(res['status']==="success"){
        SuccessToast("Request Completed");
        SetOTP(formData.otp);
        router.push("/user/setPassword")
    }
    else {
        ErrorToast("Invalid Request")
    }

    // Handle form submission logic here
    // console.log(formData);
  };
  return (
    <div>
      <h2 className="text-2xl mb-4 text-center">Email Verification</h2>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-primary p-8 rounded-lg shadow-md">
          <div>
            <h2 className="text-2xl mb-4 text-center">Email Verification</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleInputChange}
                placeholder="Enter OTP"
                className="w-full border p-2 rounded-md mb-4"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
