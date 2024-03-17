import { sendMail } from "@/lib/mail"
import { NextResponse } from "next/server"

export async function POST(req,res) {

    try {
        await sendMail({
        to: "eng.naeem.cse@gmail.com",
        name: "Naeem",
        subject: "Test",
        body: `<h1>Test</h1>`}) 
    return NextResponse.json( { status: "success" })
    } catch (error) {
    return NextResponse.json( { status: "fail" })
        
    }
   }