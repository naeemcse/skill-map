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
import Tiptap from "@/components/editor/Tiptap";
import ImageUploader from "@/components/ImageUploader";
import DivisionDistrictUpazilaSelector from "@/components/DivisionDistrictUpazilaSelector";
import LocationSelector from "@/components/locationSelector/LocationSelector";

const ServicePost = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
 const  [divisionName, setDivision] = useState("");
 const [district, setDistrict] = useState("");
 const [upazila, setUpazila] = useState("");
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
  const handleLocaionImage = ()=>{
    setFormData({
      ...formData,
     content: htmlContent,
      image1: imageUrl,
      serviceAreaDivision: divisionName,
      serviceAreaDistrict: district,
      serviceAreaUpzilla: upazila,
    });
    console.log(formData )
    console.log( htmlContent+ " "+ divisionName + " " + district + ' ' + upazila)
  }

  const handleSubmit = async (e) => {

    console.log(formData )
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
    <div className="">
      <h1 className="mx-5 text-center text-foreground">
        Post a service to Skill Map
      </h1>
      <div className="flex justify-center items-center ">
        <div className="bg-background p-8 rounded-lg shadow-md">
          <div>
            <h2 className="text-2xl mb-4 text-center">Post</h2>

            <form>
              <div className="flex flex-col gap-2">
                <label className="bottom-4"> Write your Service Name </label>
                <input
                    type="text"
                    name="serviceName"
                    value={formData.serviceName}
                    onChange={handleInputChange}
                    placeholder="ex: Software development"
                    className="w-full border p-2 rounded-md mb-4"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="bottom-4"> Upload Photo of Service </label>
                <ImageUploader setImageURL={setImageUrl}/>
                {imageUrl && <img
                    src={imageUrl}
                    alt="Your Service Name"
                    className="w-full h-64 object-cover rounded"
                    title="Photo will increase your publicity"
                />}
              </div>

              <div className="flex flex-col gap-2">
                <label className="bottom-4"> Short Content </label>
                <textarea
                    type="text"
                    name="shortContent"
                    value={formData.shortContent}
                    onChange={handleInputChange}
                    placeholder="Write short description "
                    className="w-full border p-2 rounded-md mb-4"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="bottom-4"> Design Description about your Service </label>
                <Tiptap setHtmlContent={setHtmlContent}/>
                {/*<textarea*/}
                {/*    type="text"*/}
                {/*    name="content"*/}
                {/*    value={formData.content}*/}
                {/*    onChange={handleInputChange}*/}
                {/*    placeholder="content"*/}
                {/*    className="w-full border p-2 rounded-md mb-4"*/}
                {/*/>*/}
              </div>

              {/*<input*/}
              {/*    type="text"*/}
              {/*    name="image1"*/}
              {/*    value={formData.image1}*/}
              {/*    onChange={handleInputChange}*/}
              {/*    placeholder="image1"*/}
              {/*    className="w-full border p-2 rounded-md mb-4"*/}
              {/*/>*/}
              {/*<input*/}
              {/*    type="text"*/}
              {/*    name="image2"*/}
              {/*    value={formData.image2}*/}
              {/*    onChange={handleInputChange}*/}
              {/*    placeholder="image2"*/}
              {/*    className="w-full border p-2 rounded-md mb-4"*/}
              {/*/>*/}
              {/*<input*/}
              {/*    type="text"*/}
              {/*    name="image3"*/}
              {/*    value={formData.image3}*/}
              {/*    onChange={handleInputChange}*/}
              {/*    placeholder="image3"*/}
              {/*    className="w-full border p-2 rounded-md mb-4"*/}
              {/*/>*/}
              {/*<input*/}
              {/*    type="text"*/}
              {/*    name="image4"*/}
              {/*    value={formData.image4}*/}
              {/*    onChange={handleInputChange}*/}
              {/*    placeholder="image4"*/}
              {/*    className="w-full border p-2 rounded-md mb-4"*/}

              <div className="flex flex-col gap-2">
                <label className="bottom-4"> Experience from </label>
                <input
                    type="number"
                    name="experienceFrom"
                    value={formData.experienceFrom}
                    onChange={handleInputChange}
                    placeholder="write just year example: 2020"
                    className="w-full border p-2 rounded-md mb-4"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="bottom-4"> Service charge </label>
                <input
                    type="number"
                    name="serviceCharge"
                    value={formData.serviceCharge}
                    onChange={handleInputChange}
                    placeholder="serviceCharge"
                    className="w-full border p-2 rounded-md mb-4"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="bottom-4"> Service Aria </label>
                <LocationSelector setDivision={setDivision} setDistrict={setDistrict} setUpazila={setUpazila}/>
                {/*{  <input
                    type="text"
                    name="serviceAreaDivision"
                    value={formData.serviceAreaDivision}
                    onChange={handleInputChange}
                    placeholder="serviceAreaDivision"
                    className="w-full border p-2 rounded-md mb-4"
                />
              </div>
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
                />*/}
              </div>
              <div className="flex flex-col gap-2">
                <label className="bottom-4"> Write comma separated keyword for reach more </label>
                <input
                    type="text"
                    name="keywords"
                    value={formData.keywords}
                    onChange={handleInputChange}
                    placeholder="keywords"
                    className="w-full border p-2 rounded-md mb-4"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="bottom-4"> Write comma separated tag for reach more </label>

                <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="tags"
                    className="w-full border p-2 rounded-md mb-4"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="bottom-4"> Write comma separated type for reach more </label>
                <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    placeholder="type"
                    className="w-full border p-2 rounded-md mb-4"
                />
              </div>
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
            <button onClick={handleLocaionImage} className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePost;
