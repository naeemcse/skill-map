import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"

export async function GET(req,res) {
    try{
        let {searchParams} = new URL(req.url) ;
        let serviceProvider_id = parseInt(searchParams.get('id')) ;

        const prisma=new PrismaClient();

        const result=await prisma.profileReviews.findMany({
            // select:{userID:true ,description:true},
            where:{userIDserviceProvider:serviceProvider_id},
            // select:{userID:true ,description:true,createdAt:true}
            include:{reviewer:{select:{firstName:true ,lastName:true}}}
            
        })
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}