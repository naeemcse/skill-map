import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
// import { headers } from "next/headers";
export async function GET(req, res) {
  try {
    let {searchParams} = new URL(req.url) ;
    let id = parseInt(searchParams.get('sereviceID')) ;
    // let headerList = headers();
    // let id = parseInt(headerList.get("sereviceID"));

    const prisma = new PrismaClient();
    const result = await prisma.service.findFirst({
      include:{
        serviceProvider:{
          select: { firstName:true, id:true , profilePhoto:true , profession:true }  
        }
      },
      where: { id: id },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
