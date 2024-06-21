import * as React from 'react';


export const EmailTemplate  = ({
  firstName, otp
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <h2> Thanks for register in SkillMap </h2>
    <p> Your Temporary OTP is: <h1>{otp} </h1> </p>
  </div>
);
