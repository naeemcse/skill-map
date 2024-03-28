"use client"
import { useState } from 'react';
import { IoCallOutline } from 'react-icons/io5';
import toast from 'react-hot-toast';
const PhoneNumber = ({ phoneNumber }) => {
  const [copied, setCopied] = useState(false);
    let num = parseInt(phoneNumber);
  const handlePhoneNumberClick = () => {
    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
      window.location.href = `tel:${num}`;
    } else {
      navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      toast.success('Copied:'+ phoneNumber);
      setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
    }
  };
  return (
    <div className="flex items-center my-1" onClick={handlePhoneNumberClick}>
      <a className="w-6 text-foreground cursor-pointer hover:text-primary" aria-label="Call" href={`tel:${num}`} target="_blank">
        <IoCallOutline />
      </a>
      <div>{phoneNumber}</div>
     
    </div>
  );
};

export default PhoneNumber;
