"use client";
import React from 'react';
import { UploadButton } from '@/utility/uploadthing';
// এখানে setImageURL এটা প্রপস আকারে parent থেকে এসেছে,যে parent এর একটি useState , অই স্টেট এর মান হবে এই নতুন ইউ আর এল
const ImageUploader = ({setImageURL}) => {

    return (

        <div>
            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    //   console.log("Files: ", res);
                    setImageURL(res[0].url) ;
                    //   alert("Upload Completed");
                }}
                onUploadError={(error) => {
                    // Do something with the error.
                    //   alert(`ERROR! ${error.message}`);
                }}
            />

        </div>
    );
};

export default ImageUploader;