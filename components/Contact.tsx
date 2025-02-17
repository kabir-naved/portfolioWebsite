"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const Contact = () => {
  const [btnText, setBtnText] = useState("Submit");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    message: "Successfull",
    bgColor: "green",
    status: "none",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText("Submitting...");
    setIsLoading(true);
    setMessage({
      message: "Sending...",
      bgColor: "#4c40f7",
      status: "",
    });

    const name = e.target.name.value;
    const email = e.target.email.value;
    const userMessage = e.target.message.value;

    if (!email || !name || !userMessage) {
      setMessage({
        message: "Please fill all the fields",
        bgColor: "#4c40f7",
        status: "",
      });
      setTimeout(() => {
        setMessage((prev) => ({ ...prev, status: "none" }));
      }, 3000);
      setBtnText("Submit");
      setIsLoading(false);
      return;
    }

    const templateParams = {
      user_name: name,
      user_email: email,
      user_message: userMessage,
    };

    console.log("Sending data:", {
      serviceID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      data: templateParams,
    });

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          e.target.reset();
          setBtnText("Submit");
          setIsLoading(false);
          setMessage({
            message: "Message sent successfully",
            bgColor: "green",
            status: "",
          });
          setTimeout(() => {
            setMessage((prev) => ({ ...prev, status: "none" }));
          }, 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setBtnText("Submit");
          setIsLoading(false);
          setMessage({
            message: "Something went wrong",
            bgColor: "red",
            status: "",
          });
          setTimeout(() => {
            setMessage((prev) => ({ ...prev, status: "none" }));
          }, 5000);
        }
      );
  };

  return (
    // text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 //for heading//
    <div className="min-h-screen flex flex-col justify-center items-center w-full px-4 py-20">
      <h1 className=" heading">
        Let's <span className="text-purple">Talk</span>
      </h1>
      <div className=" mt-12 w-full max-w-3xl lg:max-w-5xl p-6 sm:p-8 lg:p-10 bg-[#020617] rounded-2xl shadow-lg border border-slate-700">
        <h2 className="text-sm uppercase tracking-wider text-slate-400 mb-4">
          Get in touch
        </h2>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact</h1>
        <div
          style={{ backgroundColor: message.bgColor, display: message.status }}
          className="p-2 text-white rounded-md text-center"
        >
          {message.message}
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm text-slate-400">Your Name</label>
            <Input
              type="text"
              name="name"
              required
              placeholder="What's your good name?"
              className="bg-slate-800/50 border border-slate-700 w-full mt-1"
            />
          </div>
          <div>
            <label className="text-sm text-slate-400">Your Email</label>
            <Input
              type="email"
              name="email"
              required
              placeholder="What's your email address?"
              className="bg-slate-800/50 border border-slate-700 w-full mt-1"
            />
          </div>
          <div>
            <label className="text-sm text-slate-400">Your Message</label>
            <Textarea
              name="message"
              required
              rows={5}
              placeholder="What do you want to say?"
              className="bg-slate-800/50 border border-slate-700 w-full mt-1 min-h-[120px]"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center bg-[#CBACF9] py-3 text-lg cursor-pointer"
          >
            {btnText}
          </Button>
        </form>
      </div>
    </div>
  );
};
