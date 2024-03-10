import {EmailTemplate} from '@/components/EmailTemplete'
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req,res) {
    try {
      let reqBody = await req.json() ;
      // req.otp = "0" ;
      const { data, error } = await resend.emails.send({
        from: 'Skill Map <onboarding@resend.dev>',
        to: ['csenajmulislamnaeem@gmail.com'],
        subject: "Skill Map Registration",
        react: EmailTemplate({ firstName: "John",otp:"123" }) 
      });
  
      if (error) {
        return Response.json({ error });
      }
  
      return Response.json({ data });
    } catch (error) {
      return Response.json({ error });
    }
  }