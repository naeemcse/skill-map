import React from "react";
import Image from 'next/image';
const Profile = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center rounded">

      {/* Heading */}
      <p className="text-center dark:text-white text-3xl mt-5">User Profile</p> 

      {/* Personal info */}
      <div className="flex flex-row items-center justify-between bg-gray-300 m-10 w-1/2 h-1/2">
        <div className="w-1/2">
            <Image
            src="/images/profilePicture.jpeg"
            width={200}
            height={200}
            alt="Picture of the author"
            className="m-4 rounded-full"/>
            
            <div className="m-6">
              <p>Name: <span className="font-semibold"> Md Belal Uddin</span></p>
              <p>Age: <span className="font-semibold"> 24</span></p>
              <p>Home District: <span className="font-semibold">Cumilla</span></p>
              <p>Educational Qualification: <span className="font-semibold">Under Graduate</span></p>
              <p>Mobile: <span className="font-semibold">1234567889</span></p>
            </div>
        </div>

        {/* Professional info */}
        <div className="w-1/2 ml-4">
          <p className="font-bold text-2xl ">Professional Qualification</p>

            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
            <p>A</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
