import React, { useState, useCallback } from "react";
import Image from "next/image";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center pt-10 min-h-screen z-50">
      <div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">
        <div className="pb-10">
          <Image
            style={{ borderRadius: "10" }}
            src="/assets/MH.svg"
            width={100}
            height={60}
            alt="logo"
          />
        </div>
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
          <input
            id="companyName"
            name="companyName"
            required
            maxLength={128}
            type="text"
            placeholder="Company Name"
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          />
          <input
            id="email"
            name="email"
            required
            maxLength={128}
            type="email"
            placeholder="Your Email please..."
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          />
          <textarea
            name="message"
            id="message"
            required
            maxLength={1048576}
            placeholder="Additional Information"
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
          ></textarea>
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-white text-black rounded-3xl px-8 py-2"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
