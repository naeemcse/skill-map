"use client";
import {ErrorToast,GetOTP,SetOTP,GetEmail, IsEmail, IsEmpty, SetEmail, SuccessToast} from "@/utility/FormHelper";
import {useRouter} from "next/navigation";


import React, { useState } from "react";

const SetPassword = () => {
  let router=useRouter()
        const [formData, setFormData] = useState({
          password: "",
          email:GetEmail(),
          otp:GetOTP()
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
            const options={method:'POST', body:JSON.stringify(formData)}
            let res=await (await fetch(`/api/user/setPassword`,options)).json();
           
            if(res['status']==="success"){
                SuccessToast("Request Completed");
                SetOTP(formData.otp);
                router.push("/user/login")
            }
            else {
                ErrorToast("Invalid Request")
            }

            // Handle form submission logic here
            // console.log(formData);
          };
    return (
        <div>
             <h1 className="mx-5 text-center text-foreground"> Wellcome for Register to Skill Map   </h1>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-400 p-8 rounded-lg shadow-md">
            <div>
                <h2 className="text-2xl mb-4 text-center">Set Password</h2>
    
                <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
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

export default SetPassword;