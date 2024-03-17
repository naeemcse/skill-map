import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { sendMail } from "@/lib/mail"

export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    const UserEmail = reqBody.email;
    const UserName = reqBody.lastName;
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    reqBody.otp = randomOtp;
    const prisma = new PrismaClient();
    let result = await prisma.users.create({
    data: reqBody,
    });
    // send email with otp
    const data = await sendMail({
      to: UserEmail,
      name: UserName,
      subject: "Skill Map Registration",
      body: `
      <h1>Dear ${UserName} , Wellcome to Skill Map  Test</h1>
      <p> Your OTP is <b> ${randomOtp} </b></p>  
      <p> Please use this OTP to verify your email</p>
      <p> After verification you can set Password to your account</p>
      `}) 

    return NextResponse.json({
      status: "success",
      message: "User registered successfully",
      data: result,
      email: data,
    });
  } catch (err) {
    console.error("Error:", err); // Log the error for debugging
    return NextResponse.json({
      status: "error",
      message: "Error inserting data",
      data: err,
    });
  }
  
  }


