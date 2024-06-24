"use client";
import React, { useState, useEffect, use } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ErrorToast,
  SetEmail,
  IsEmail,
  IsEmpty,
  SuccessToast,
} from "@/utility/FormHelper";
import MessageBox from "./MessageBox";
import ProfileReceiver from "./ProfileReceiver";

const MessageBody = ({ receiverId ,conversationId}) => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  let conversation;
  const handleSend = async (e) => {
    e.preventDefault();
    if (IsEmpty(message)) {
      ErrorToast("Message is empty");
      return;
    }
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          receiverId: receiverId,
          content: message,
        }),
      };

      let res = await (await fetch(`/api/message/send`, options)).json();

      if (res["status"] === "success") {
        SuccessToast("Request Success");
        setMessage("");
        conversation= res.data.conversationId;
        // Fetch all messages for the given conversation
        fetchMessages(conversation);
      } else {
        ErrorToast("Invalid Request ! ");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // Fetch all messages for the given conversation
    useEffect(() => {
      const fetchMessages = async (conversationId) => {
        try {
          const res = await fetch(
              `/api/message/singlemessage?id=${conversationId}`
          );
          const data = await res.json();
          console.log(data);
          setData(data.data);
        } catch (error) {
          console.error("Error:", error);
        }
      };
        fetchMessages(conversationId);
    }, [conversationId]);
  const fetchMessages = async (conversationId) => {
    try {
      const res = await fetch(
          `/api/message/singlemessage?id=${conversationId}`
      );
      const data = await res.json();
      // console.log(data);
      setData(data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Card className="w-full max-w-[1000px]">
        <CardHeader>
          <ProfileReceiver receiverId={receiverId}/>
        </CardHeader>
        <Card className="bg-secondary m-2">
          <CardContent className="h-[150px]">
            <MessageBox messages={data} />
          </CardContent>
          <CardFooter className="flex justify-between mt-5">
            <Input
              value={message}
              className="m-1 mt-10"
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button className="m-1 mt-10" onClick={handleSend}>
              Send
            </Button>
          </CardFooter>
        </Card>
      </Card>
    </div>
  );
};

export default MessageBody;
