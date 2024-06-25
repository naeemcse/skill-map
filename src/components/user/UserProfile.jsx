"use client";
import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utility/FormHelper";
import { useRouter } from "next/navigation";
import {Button }from "@/components/ui/button"
import SearchLocationSuggestion from "@/components/SerachLocationSuggestion";
import LocationSelector from "@/components/user/profile/LocationSelector/LocationSelector";


const UpdateUserProfile = ({info}) => {
    const router = useRouter()
  
  const classOfInput = `border bg-background border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96 m-1`
  
  let [data, setData] = useState({
        // id:info.id,
        firstName: "",
        lastName:  "",
        email:  "",
        password:  "",
        dateofBirth:  "",
        profilePhoto:  "",
        divisionName:  "",
        districtName:  "",
        upzillaName:  "",
        location:  "",
        profession:  "",
        experience: "",
        details:"",
        mobile: "",
        whatsApp: "",
        facebookProfile: "",
        linkedInProfile:"",
    // otp      : "0",
    // createdAt : "",
    // updatedAt: "",
  });

  useEffect(() => {
    setData({
        // id:info.id,
        firstName: info.firstName,
        lastName: info.lastName ,
        email: info.email,
        password: info.password,
        dateofBirth: info.dateofBirth,
         profilePhoto: info.profilePhoto || "",
         divisionName: info.divisionName || "",
         districtName: info.districtName || "",
         upzillaName: info.upzillaName || "",
        location: info.location || "",
        profession: info.profession || "",
        experience: info.experience || "",
        details: info.details || "",
        mobile: info.mobile || "",
        whatsApp: info.whatsApp || false ,
        facebookProfile: info.facebookProfile || "",
        linkedInProfile: info.linkedInProfile || "",
        // otp: "0", // Resetting OTP to "0" if needed
        // createdAt: info.createdAt || "",
        // updatedAt: info.updatedAt || "",
    });
  }, []);

  const inputOnChange = (name,value) => {
    setData((data)=>({
        ...data,
        [name]: value
    }))
}

const handleChangeLocationState = (value) => {
    setData((data)=>({
        ...data,
        ['location']: value
    }))
  };

  const formSubmit = async (e) => {
    e.preventDefault()
    const options={method:'POST', body:JSON.stringify(data)}
    let res=await (await fetch(`/api/user/profile/update`,options)).json();
  
    if (res['status'] === "success") {
        SuccessToast("Profile Updated");
      router.push("/dashboard");
      // router.refresh();
    } else {
      ErrorToast("Invalid Request ! ");
    }
  };

  return (
    <div>
      <div className="bg-card-background shadow-md rounded px-8 pt-6 p-8 mb-4 flex flex-col m-2">
        <Button className="bg-foreground text-background  w-1/2" onClick={formSubmit}  > Save Data </Button>
        <div className="flex rounded-t-lg bg-cover sm:px-2 w-full bg-primary h-60">
          <div className="text-center h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3 border-2 border-card-foreground">
            <Image
              src={ data.profilePhoto || "/image/dummyUser.png"}
              alt={"profile Photo"}
              width={200}
              height={100}
              loading="lazy"
            />
           <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
             
              type="file"
            />
          </div>
          <div className="w-2/3 sm:text-center pl-5 mt-10 text-start overflow-hidden">
            <p className="text-heading"> Google Location </p>
            <h1> {data.firstName}</h1>
            <SearchLocationSuggestion placeholder={data.location} cls={classOfInput} onStateChange={handleChangeLocationState} />

          </div>
        </div>

        <div className="mt-5 -mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              value={data.firstName} onChange={(e) => {inputOnChange('firstName', e.target.value)}} 
              type="text"
            />
            
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              value={data.lastName} onChange={(e) => {inputOnChange('lastName', e.target.value)}} 
              type="text"
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="hover:text-primary block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              <IoMailOutline className="inline-block mr-1" />
              Email
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              value={data.email} onChange={(e) => {inputOnChange('email', e.target.value)}} 
              type="email"

            />
           
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              value={data.password} onChange={(e) => {inputOnChange('password', e.target.value)}} 
              type="password"
            />
          </div>
        </div>
        <h2 className="text-center border-b-2 border-t-2">
          {" "}
          Contact Information{" "}
        </h2>
        <div className="-mx-3 md:flex mb-2 mt-2">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Mobile
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              value={data.mobile} onChange={(e) => {inputOnChange('mobile', e.target.value)}} 
              type="text"
              placeholder="0186.."
            />
          </div>
          <div className="md:w-auto px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              WhatsApp
            </label>
            <div className="">
              <input type="checkbox"
               value={data.mobile} onChange={(e) => {inputOnChange('mobile', e.target.value)}}  />
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              <FaFacebook className="text-blue-500 mr-2 inline-block" />
              FaceBook Link
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              value={data.facebookProfile} onChange={(e) => {inputOnChange('facebookProfile', e.target.value)}} 
              type="text"
              placeholder="www.faceboook.com/cou.naeem.cse"
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              <FaLinkedin className="text-blue-500 mr-2 inline-block cursor-pointer hover:text-primary" />
              Linkdin Profile
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              value={data.linkedInProfile} onChange={(e) => {inputOnChange('linkedInProfile', e.target.value)}} 
              type="text"
              placeholder="www.linkdin.com/cou.naeem.cse"
            />
          </div>
        </div>
        <h2 className="text-center border-b-2 border-t-2">
          {" "}
          Location Information{" "}
        </h2>
        <div className="-mx-3 md:flex mb-2 mt-2 ">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Division
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              value={data.divisionName} onChange={(e) => {inputOnChange('divisionName', e.target.value)}} 
              type="text"
              placeholder="Mymensingh.."
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              District
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              value={data.districtName} onChange={(e) => {inputOnChange('districtName', e.target.value)}} 
              type="text"
              placeholder="Sherpur"
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Upzilla
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              value={data.upzillaName} onChange={(e) => {inputOnChange('upzillaName', e.target.value)}} 
              type="text"
              placeholder="Nakla"
            />
          </div>
            <LocationSelector data={data} setData={setData} />
        </div>
        <h2 className="text-center border-b-2 border-t-2">
          {" "}
          Professional Information{" "}
        </h2>
        <div className="-mx-3 md:flex mb-2 mt-2">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Profession
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              value={data.profession} onChange={(e) => {inputOnChange('profession', e.target.value)}} 
              type="text"
              placeholder="Software Engineer"
            />
          </div>

          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Experience
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              value={data.experience} onChange={(e) => {inputOnChange('experience', e.target.value)}} 
              type="text"
              placeholder="5 year "
            />
          </div>
          
          
        </div>
        <div className="-mx-3 md:flex mb-2 mt-2">
        <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Details
            </label>
            <textarea
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              value={data.details} onChange={(e) => {inputOnChange('details', e.target.value)}} 
              
              placeholder="I am a professional Software Engineer"
            />
            </div>
          </div>


        <div className="-mx-3 md:flex mb-2">
          {/* Date of Birth  */}
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Date of Birth
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              value={data.dateofBirth} onChange={(e) => {inputOnChange('dateofBirth', e.target.value)}} 
              type="text"
              placeholder={"10-March-2021"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
