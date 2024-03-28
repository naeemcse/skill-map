import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function GET(req, res) {
try{
    const prisma = new PrismaClient();
    const result = await prisma.service.findMany({
        include:{
            serviceProvider:{
                select:{
                firstName:true ,  profilePhoto:true ,profession:true 
            } }
        }
    })
    return NextResponse.json({ status: "success", data:result });
}
catch (err) {
return NextResponse.json({ status: "fail", data: err });
}
}