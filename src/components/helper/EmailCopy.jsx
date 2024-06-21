"use client"
import { useState } from 'react';
import { IoMailOutline } from 'react-icons/io5';
import toast from 'react-hot-toast';

const EmailAddress = ({ emailAddress }) => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
      window.location.href = `mailto:${emailAddress}`;
    } else {
      navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      toast.success('Copied:'+ emailAddress);
      setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
    }
  };

  return (
    <div className="flex items-center my-1" onClick={handleEmailClick}>
      <a className="w-6 text-foreground hover:text-primary" aria-label="Email" href={`mailto:${emailAddress}`} target="_blank">
        <IoMailOutline />
      </a>
      <div className='cursor-pointer hover:text-primary'>{emailAddress}</div>
     
    </div>
  );
};

export default EmailAddress;
