import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    const prisma = new PrismaClient();
    let result = await prisma.socials.create({
    data: {
      facebook: reqBody.facebook }
    });
    return NextResponse.json({
      status: "success",
      message: "User registered successfully",
      data: result,
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


export async function GET(req,res) {
    try{
        const prisma=new PrismaClient();
        const result=await prisma.socials.findMany()
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}

