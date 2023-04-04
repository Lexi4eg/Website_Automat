/* eslint-disable react-hooks/rules-of-hooks */
//import { Head } from "next/document";
"use client";
import React, { useState } from "react";

import axios from "axios";

function Contactme() {
  const [firstname, setfirstname] = useState("");
  const [header, setheader] = useState("");
  const [phone, setphone] = useState("");
  const [company, setcompany] = useState("");
  const [lastname, setlastname] = useState("");
  const [emailsender, setemailsender] = useState("");
  const email = "felix.prattes@gmail.com";
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setStatus(null);
    try {
      await axios.post("/api/send-email", {
        firstname,
        lastname,
        email,
        message,
        emailsender,
        phone,
        company,
        header,
      });

      setStatus("Email sent successfully");
    } catch (err) {
      console.error(err);
      setStatus("Error sending email");
    }
  };
  return (
    <>
      <div className="flex text-white flex-col h-screen  bg-bg_gray2">
        <div>
          <div className="p-20 py-10">
            <div className="text-2xl">Contact</div>
            <div className="pt-6 text-6xl">Don’t be shy, say hi.</div>
            <div className="pt-10 text-3xl w-2/3">
              Some of the world’s most impactful products, solutions and
              campaigns start with a conversation. Tell us about what you’re
              making and we’ll see how we can help.
            </div>
          </div>
          <div className=" p-20 py-10">
            <form onSubmit={handleSubmit} className="">
              <div className="flex flex-row">
                <div className="w-1/2  p-5">
                  <div>Name*</div>
                  <input
                    type="text"
                    className="w-full bg-bg_gray2 border-b p-2 pl-0 hover:border-yellow-400"
                    name="name"
                    id="rollNumber"
                    value={firstname}
                    required
                    onChange={(e) => setfirstname(e.target.value)}
                  />
                  <div>first</div>
                </div>
                <div className="w-1/2 p-5">
                  <div>*</div>
                  <input
                    type="text"
                    className="w-full bg-bg_gray2 border-b p-2 pl-0 hover:border-yellow-400"
                    name="name"
                    id="rollNumber"
                    value={lastname}
                    required
                    onChange={(e) => setlastname(e.target.value)}
                  />
                  <div>last</div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-1/2  p-5">
                  <div>Email*</div>
                  <input
                    type="text"
                    className="w-full bg-bg_gray2 border-b p-2 pl-0 hover:border-yellow-400"
                    name="Email"
                    id="rollNumber"
                    value={emailsender}
                    required
                    onChange={(e) => setemailsender(e.target.value)}
                  />
                </div>
                <div className="w-1/2 p-5">
                  <div>Phone*</div>
                  <input
                    type="text"
                    className="w-full bg-bg_gray2 border-b p-2 pl-0 hover:border-yellow-400"
                    name="name"
                    id="rollNumber"
                    value={phone}
                    required
                    onChange={(e) => setphone(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full p-5">
                <div>I’d like to talk about...*</div>
                <input
                  type="text"
                  placeholder="Working together"
                  className="w-full bg-bg_gray2 border-b p-2 pl-0 hover:border-yellow-400"
                  name="name"
                  id="rollNumber"
                  value={header}
                  required
                  onChange={(e) => setheader(e.target.value)}
                />
              </div>

              <div className="w-full p-5">
                <div>Company</div>
                <input
                  type="text"
                  className="w-full bg-bg_gray2 border-b p-2 pl-0 hover:border-yellow-400"
                  name="name"
                  id="rollNumber"
                  value={company}
                  required
                  onChange={(e) => setcompany(e.target.value)}
                />
              </div>
              <div className="w-full p-5">
                <input
                  type="textarea"
                  placeholder="Your Message"
                  name="Your Message"
                  className="w-full h-40 bg-bg_gray2 border rounded-sm p-4 hover:border-yellow-400"
                  id="name"
                  value={message}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
                <div className="flex justify-center w-32 rounded-md  border py-2 px-4 hover:border-yellow-400  ">
                  <button
                    type="submit"
                    className="  text-xl p-1 text-center text-white w-20"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactme;
