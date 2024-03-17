import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

export async function POST(req, res) {
  const reqBody = await req.json();
  const prisma = new PrismaClient();
  
  // const hashedPassword = await hash(reqBody.password, 10);

  try {
    const result = await prisma.users.update({
      where: {
        email: reqBody.email,
        otp: reqBody.otp,
      },
      data: {
        password:reqBody.password, // stored password as a hashed
        otp: "0", // reset otp
      },
    });
    return NextResponse.json({
    status: "success",
    data: "Password Set Successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: "fail",
      data: error,
    });
  }
}
