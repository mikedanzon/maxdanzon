import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="snap-normal snap-start shrink-0 w-screen h-[100svh] md:h-screen m-auto flex flex-col justify-center items-center md:px-20 px-4"
    >
      <div className="mb-5">
        <div className="pb-2 md:text-4xl text-2xl font-bold text-center text-[--main-color]">
          Send me a message!
        </div>
        <div className="pb-4 md:text-base text-xs font-bold text-center text-[--main-fade-color]">
          Got a question or proposal, or just want to say hello? Go ahead.
        </div>
      </div>
      <form
        action="https://getform.io/f/5943f4a2-e266-4281-ae59-1bda9adf926e"
        method="POST"
        encType="multipart/form-data"
        className="w-full mb-24 md:mb-10"
      >
        <div className="grid md:grid-cols-2 md:gap-5 md:mb-5 mb-2">
          <div className="flex flex-col md:mb-0 mb-1">
            <label className="text-sm pb-1 text-[--main-color]">
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
            <label className=" text-sm pb-1 text-[--main-color]">
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
        <div className="flex flex-col md:mb-5 mb-2">
          <label className="text-sm pb-1 text-[--main-color]">
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
          className="bg-[--main-color] w-full p-4 rounded-lg"
          type="submit"
        >
          Send Message
        </button>
      </form>
      <div className="text-center text-[--main-fade-color]">
        © Copyright 2023 maxdanzon.com
        <br />
        All Rights Reserved.
      </div>
    </div>
  );
};

export default Contact;
