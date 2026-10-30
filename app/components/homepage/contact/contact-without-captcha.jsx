"use client";

import { isValidEmail } from "@/utils/check-email";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";

const fieldClass =
  "w-full border border-white/15 bg-transparent px-3 py-3 text-[#f4efe6] outline-none transition placeholder:text-white/30 focus:border-[#d6b48a]";

function ContactWithoutCaptcha() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
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
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    try {
      const res = await emailjs.send(serviceID, templateID, input, options);

      if (res.status === 200) {
        toast.success("Message sent.");
        setInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (sendError) {
      toast.error(sendError?.text || "Could not send. Use the email address above.");
    }
  };

  return (
    <form onSubmit={handleSendMail} className="border border-white/10 p-6 md:p-8">
      <h3 className="font-serif text-2xl text-[#f4efe6]">Send a message</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#b7b0a4]">
        Tell me a little about the role or the team.
      </p>

      <div className="mt-6 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="text-[11px] uppercase tracking-[0.16em] text-[#b7b0a4]">
            Name
          </label>
          <input
            id="contact-name"
            className={fieldClass}
            type="text"
            maxLength={100}
            required
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            onBlur={checkRequired}
            value={input.name}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="text-[11px] uppercase tracking-[0.16em] text-[#b7b0a4]">
            Email
          </label>
          <input
            id="contact-email"
            className={fieldClass}
            type="email"
            maxLength={100}
            required
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            onBlur={() => {
              checkRequired();
              setError({ ...error, email: !isValidEmail(input.email) });
            }}
          />
          {error.email ? (
            <p className="text-sm text-red-300">Enter a valid email address.</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message" className="text-[11px] uppercase tracking-[0.16em] text-[#b7b0a4]">
            Message
          </label>
          <textarea
            id="contact-message"
            className={fieldClass}
            maxLength={500}
            name="message"
            required
            onChange={(e) => setInput({ ...input, message: e.target.value })}
            onBlur={checkRequired}
            rows={5}
            value={input.message}
          />
        </div>

        {error.required ? (
          <p className="text-sm text-red-300">Name, email, and message are required.</p>
        ) : null}

        <button
          type="submit"
          className="inline-flex w-fit items-center bg-[#d6b48a] px-5 py-3 text-sm font-medium text-[#1a1610] transition hover:bg-[#e6c9a4]"
        >
          Send message
        </button>
      </div>
    </form>
  );
}

export default ContactWithoutCaptcha;
