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

const MessageBody = ({ reciverId }) => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  let conversationId;
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
          receiverId: reciverId,
          content: message,
        }),
      };

      let res = await (await fetch(`/api/message/send`, options)).json();

      if (res["status"] === "success") {
        SuccessToast("Request Success");
        setMessage("");
        conversationId = res.data.conversationId;
        // Fetch all messages for the given conversation
        fetchMessages(conversationId);
      } else {
        ErrorToast("Invalid Request ! ");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // Fetch all messages for the given conversation
  const fetchMessages = async (conversationId) => {
    try {
      const res = await fetch(`/api/message/singlemessage?id=${conversationId}`);
      const data = await res.json();
      console.log(data);
      setData(data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Card className="w-full max-w-[1000px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <Card className="bg-secondary m-2">
          <CardContent className="h-[150px]">
            All megssages with
            {reciverId}: {message}
            <MessageBox messages={data} />
            <span> conversationId is: {conversationId}</span>
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
