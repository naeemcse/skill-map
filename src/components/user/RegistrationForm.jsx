"use client";
import React, { useState } from "react";
import {ErrorToast,SetEmail, IsEmail, IsEmpty, SuccessToast} from "@/utility/FormHelper";
import {useRouter} from "next/navigation";

const RegistrationForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here
    const options={method:'POST', body:JSON.stringify(formData)}

    let res=await (await fetch("/api/user/registration",options)).json();
   
    if(res['status']==="success"){
        SuccessToast("Request Success")
        SetEmail(formData.email);
        router.push("/user/verifyOTP")
    }
    else{
        ErrorToast("Invalid Request ! ")
    }
    // console.log(formData);
  };
  return (
    <div>
      <h1 className="mx-5 text-center text-foreground"> Wellcome for Register to Skill Map   </h1>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-400 p-8 rounded-lg shadow-md">
          <div>
            <h2 className="text-2xl mb-4 text-center">Registration Form</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full border p-2 rounded-md mb-4"
              />

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-full border p-2 rounded-md mb-4"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full border p-2 rounded-md mb-4"
              />

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
