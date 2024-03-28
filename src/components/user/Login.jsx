"use client";
import {ErrorToast,SuccessToast} from "@/utility/FormHelper";

import React, { useState } from 'react';
import {useRouter} from "next/navigation";


const Login = () => {
    let router=useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit =async (e) => {
        e.preventDefault();
        const options={method:'POST', body:JSON.stringify(formData)}
        let res=await (await fetch(`/api/user/login`,options)).json();
        setFormData({email:"",password:""});
        if(res['status']==="success"){
          SuccessToast("Request Completed");
          window.location.href="/"
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
            <h2 className="text-2xl mb-4 text-center">Log In Form </h2>

            <form onSubmit={handleSubmit}>
        
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full border p-2 rounded-md mb-4"
              />
                < input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
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

export default Login;