"use server";

import React from "react";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("sender-email");
  const senderMessage = formData.get("sender-message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid email",
    };
  }

  if (!validateString(senderMessage, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "fadilansyah25.dev@gmail.com",
      subject: "Message from contact form personal website",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: senderMessage,
        senderEmail: senderEmail,
      }),
    });

    if (!data.id) {
      if (getErrorMessage(data)) {
        throw new Error(getErrorMessage(data));
      }
    }
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
