import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { sendMail } from "@/lib/mail"

export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    const UserEmail = reqBody.email;
    // const UserName = reqBody.lastName;
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    reqBody.otp = randomOtp;
    const prisma = new PrismaClient();
    let result = await prisma.users.findUnique({
    where:{email:UserEmail}
    });

    if(result){
        await prisma.users.update({
          where:{email:UserEmail},
          data:{
            otp:randomOtp
          }
    }) ;
    // send email with otp
    const UserName = result.firstName;
    const data = await sendMail({
      to: UserEmail,
      name: UserName,
      subject: "Skill Map Reset Password ",
      body: `
      <h1> Dear ${UserName} , You have requested for Reset Password  </h1>
      <p> Your OTP is <b> ${randomOtp} </b></p>  
      <p> Please use this OTP to reset your password</p>
      `}) 
    return NextResponse.json({
      status: "success",
      message: "OTP Sennd to your email successfully",
      data: result,
      email: data,
    });
  }} catch (err) {
    console.error("Error:", err); // Log the error for debugging
    return NextResponse.json({
      status: "error",
      message: "Error inserting data",
      data: err,
    });
  }
  
  }


