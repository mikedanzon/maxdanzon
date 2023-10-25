import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="snap-normal snap-start shrink-0 w-screen h-[100svh] md:h-screen m-auto flex flex-col justify-center items-center md:px-20 px-4"
    >
      <h1 className="pb-2 text-4xl font-bold text-center text-[--main-color]">
        Send me a message!
      </h1>
      <h2 className="pb-4 font-bold text-center text-[--main-fade-color]">
        Got a question or proposal, or just want to say hello? Go ahead.
      </h2>
      <form
        action="https://getform.io/f/5943f4a2-e266-4281-ae59-1bda9adf926e"
        method="POST"
        encType="multipart/form-data"
        className="w-full"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="text-sm py-2 text-[--main-color]">
              Your Name*
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className=" text-sm py-2 text-[--main-color]">
              Your Email Address*
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="text-sm py-2 text-[--main-color]">
            Your Message*
          </label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300"
            rows={5}
            name="message"
            placeholder="You can say anything to me, feel free to leave your extra details here"
            required
          />
        </div>
        <button
          className="bg-[--main-color] mt-4 w-full p-4 rounded-lg"
          type="submit"
        >
          Send Message
        </button>
      </form>
      <div className="text-center pt-10 text-[--main-fade-color]">
        © Copyright 2023 maxdanzon.com
        <br />
        All Rights Reserved.
      </div>
    </div>
  );
};

export default Contact;
