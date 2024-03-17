import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


export async function POST(req, res) {
try{
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.users.findMany({
        where: {
            divisionName: reqBody.divisionName,
            districtName: reqBody.districtName,
            upzillaName: reqBody.upzillaName,
            profession:{
                contains: reqBody.profession
            }
           // here will be a search query for the service post 
        },            
    });
     return NextResponse.json({ status: "success", data:result });
    }

 catch (err) {
    return NextResponse.json({ status: "fail", data: err });
  }
}

