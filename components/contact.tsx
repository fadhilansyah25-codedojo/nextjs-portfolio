"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import { useToastContext } from "./toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { setToast } = useToastContext();

  const handleSendEmail = async (formData: FormData) => {
    const { error } = await sendEmail(formData);

    if (error) {
      setToast({ message: error, typeNotif: "error" });
      return;
    }

    setToast({ message: "Email sent successfully!" });
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 mt-20 w-[min(100%,38rem)] scroll-mt-28 sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-center text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:fadilansyah25.dev@gmail.com">
          fadilansyah25.dev@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form className="mt-10 flex flex-col gap-3" action={handleSendEmail}>
        <input
          name="sender-email"
          id="email"
          className="rounded-sm border border-black/10 px-4 py-2"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          name="sender-message"
          id="message"
          cols={30}
          rows={10}
          placeholder="Your message"
          className="mb-4 h-52 rounded-sm border border-black/5 p-4"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
