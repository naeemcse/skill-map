import { CreateToken } from "@/utility/JWTTokenHelper";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

export async function POST(req,res) {
    try{
        let reqBody=await req.json();
        const prisma=new PrismaClient();
        // reqBody.password = await hash(reqBody.password, 10);
        const result=await prisma.users.findUnique({where:reqBody})
        
        if(result.length===0){
            return  NextResponse.json({status:"fail",data:result})
        }
        else{
            let token=await CreateToken(result['email'],result['id']);
            let expireDuration=new Date(Date.now() + 24*60*60*1000 );
            const cookieString=`token=${token}; expires=${expireDuration.toUTCString()} ;path=/`;
            return  NextResponse.json({status:"success",data:token},{status:200,headers:{'set-cookie':cookieString}})
        }
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}

// for logout
export async function GET(req,res) {
    let expireDuration=new Date(Date.now() - 24*60*60*1000 );
    const response = NextResponse.redirect(new URL('/', req.url),303);
    response.cookies.set('token', '', { expires: expireDuration });
    return response;
}
