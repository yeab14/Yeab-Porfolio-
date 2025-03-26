"use client";
// @flow strict
import { isValidEmail } from '@/utils/check-email';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';

function ContactWithoutCaptcha() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    try {
      const res = await emailjs.send(serviceID, templateID, input, options);

      if (res.status === 200) {
        toast.success('Message sent successfully!');
        setInput({
          name: '',
          email: '',
          message: '',
        });
      };
    } catch (error) {
      toast.error(error?.text || error);
    };
  };

  return (
    <div className="relative w-full p-6 bg-[#0f0f0f] rounded-2xl border border-[#2d2d2d] shadow-[0_4px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_6px_60px_rgba(0,0,0,0.7)] transition-all duration-500 overflow-hidden">
      <div className="relative p-6 rounded-xl border border-[#333] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
      <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4 border-b border-[#333] pb-4">
              Get in Touch
            </h2>

        <div className="overflow-hidden px-4 lg:px-8 py-6 lg:py-8 bg-[#141414] rounded-xl shadow-inner">
          <p className="text-sm text-[#d3d8e8] mb-6">
            {"If you have any questions or concerns, feel free to reach out to me. I am open to any work opportunities that align with my skills and interests."}
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-base text-[#d3d8e8]">Your Name: </label>
              <input
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-[#d3d8e8]"
                type="text"
                maxLength="100"
                required={true}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
                onBlur={checkRequired}
                value={input.name}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base text-[#d3d8e8]">Your Email: </label>
              <input
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-[#d3d8e8]"
                type="email"
                maxLength="100"
                required={true}
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
                onBlur={() => {
                  checkRequired();
                  setError({ ...error, email: !isValidEmail(input.email) });
                }}
              />
              {error.email &&
                <p className="text-sm text-red-400">Please provide a valid email!</p>
              }
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base text-[#d3d8e8]">Your Message: </label>
              <textarea
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-[#d3d8e8]"
                maxLength="500"
                name="message"
                required={true}
                onChange={(e) => setInput({ ...input, message: e.target.value })}
                onBlur={checkRequired}
                rows="4"
                value={input.message}
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              {error.required &&
                <p className="text-sm text-red-400">
                  Email and Message are required!
                </p>
              }
              <button
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                role="button"
                onClick={handleSendMail}
              >
                <span>Send Message</span>
                <TbMailForward className="mt-1" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWithoutCaptcha;
