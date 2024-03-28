"use client";
import React, { useState } from "react";
import {
  ErrorToast,
  SetEmail,
  IsEmail,
  IsEmpty,
  SuccessToast,
} from "@/utility/FormHelper";
import { useRouter } from "next/navigation";

const ServicePost = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    serviceName: "",
    shortContent: "",
    content: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    experienceFrom: 2010,
    serviceCharge: 0,
    serviceAreaDivision: "",
    serviceAreaDistrict: "",
    serviceAreaUpzilla: "",
    keywords: "",
    tags: "",
    type: "",
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
    // console.log(JSON.stringify(formData))
    // Handle form submission logic here
    const options = { method: "POST", body: JSON.stringify(formData) };

    let res = await (await fetch(`/api/servicePost/manage`, options)).json();

    if (res["status"] === "success") {
      SuccessToast("Request Success");

      //   router.push("/user/verifyOTP");
    } else {
      ErrorToast("Invalid Request ! ");
    }
    // console.log(formData);
  };
  return (
    <div>
      <h1 className="mx-5 text-center text-foreground">
        Post a service to Skill Map
      </h1>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-400 p-8 rounded-lg shadow-md">
          <div>
            <h2 className="text-2xl mb-4 text-center">Post</h2>

            <form>
              <input
                type="text"
                name="serviceName"
                value={formData.serviceName}
                onChange={handleInputChange}
                placeholder="Write your Service Name "
                className="w-full border p-2 rounded-md mb-4"
              />
              <textarea
                type="text"
                name="shortContent"
                value={formData.shortContent}
                onChange={handleInputChange}
                placeholder="shortContent"
                className="w-full border p-2 rounded-md mb-4"
              />
              <textarea
                type="text"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="content"
                className="w-full border p-2 rounded-md mb-4"
              />
              <input
                type="text"
                name="image1"
                value={formData.image1}
                onChange={handleInputChange}
                placeholder="image1"
                className="w-full border p-2 rounded-md mb-4"
              />
              <input
                type="text"
                name="image2"
                value={formData.image2}
                onChange={handleInputChange}
                placeholder="image2"
                className="w-full border p-2 rounded-md mb-4"
              />
              <input
                type="text"
                name="image3"
                value={formData.image3}
                onChange={handleInputChange}
                placeholder="image3"
                className="w-full border p-2 rounded-md mb-4"
              />
              <input
                type="text"
                name="image4"
                value={formData.image4}
                onChange={handleInputChange}
                placeholder="image4"
                className="w-full border p-2 rounded-md mb-4"
              />
              <input
                type="number"
                name="experienceFrom"
                value={formData.experienceFrom}
                onChange={handleInputChange}
                placeholder="experienceFrom"
                className="w-full border p-2 rounded-md mb-4"
              />
              <input
                type="number"
                name="serviceCharge"
                value={formData.serviceCharge}
                onChange={handleInputChange}
                placeholder="serviceCharge"
                className="w-full border p-2 rounded-md mb-4"
              />
              <input
                type="text"
                name="serviceAreaDivision"
                value={formData.serviceAreaDivision}
                onChange={handleInputChange}
                placeholder="serviceAreaDivision"
                className="w-full border p-2 rounded-md mb-4"
              />
              <input
                type="text"
                name="serviceAreaDistrict"
                value={formData.serviceAreaDistrict}
                onChange={handleInputChange}
                placeholder="serviceAreaDistrict"
                className="w-full border p-2 rounded-md mb-4"
              />
              <input
                type="text"
                name="serviceAreaUpzilla"
                value={formData.serviceAreaUpzilla}
                onChange={handleInputChange}
                placeholder="serviceAreaUpzilla"
                className="w-full border p-2 rounded-md mb-4"
              />
              <input
                type="text"
                name="keywords"
                value={formData.keywords}
                onChange={handleInputChange}
                placeholder="keywords"
                className="w-full border p-2 rounded-md mb-4"
              />
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                placeholder="tags"
                className="w-full border p-2 rounded-md mb-4"
              />{" "}
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                placeholder="type"
                className="w-full border p-2 rounded-md mb-4"
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  POST
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePost;
