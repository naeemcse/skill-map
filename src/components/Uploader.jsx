"use client";
import React from 'react';
import {useState} from 'react'
import { UploadButton } from '@/utility/uploadthing';
import Image from "next/image"; 

const Uploader = () => {
    const [imageURL,setImageURL]  = useState("") ;
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

        {
            imageURL.length ? ( <Image src={imageURL} width={500} height={200} />  ): null
        }

        </div>
    );
};

export default Uploader;