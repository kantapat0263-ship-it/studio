"use server";

import { z } from "zod";
import { Resend } from "resend";

// NOTE: You need to set your RESEND_API_KEY in your environment variables (.env.local)
// You can get a free key from https://resend.com

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormState = {
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  message?: string | null;
  success?: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors in the form.",
      success: false,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  // For development, we can check if the API key is missing.
  if (!process.env.RESEND_API_KEY) {
    console.log("RESEND_API_KEY is not set. Simulating email success.");
    console.log("Form data:", { name, email, subject, message });
    return {
      message:
        "Email sent successfully (simulation)! Check the server console for the form data.",
      success: true,
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "Lotus EME Inquiry <onboarding@resend.dev>",
      to: ["lotus_eme@hotmail.com"],
      subject: `New Contact Form Submission: ${subject}`,
      reply_to: email,
      html: `
        <h1>New Inquiry from your Website</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return {
        message: `Sorry, there was an error sending your message: ${error.message}. Please try again later.`,
        success: false,
      };
    }

    return {
      message: "Thank you for your message! We will get back to you soon.",
      success: true,
    };
  } catch (exception) {
    console.error("Email Sending Exception:", exception);
    let errorMessage = "An unknown error occurred while sending the email.";
    if (exception instanceof Error) {
      errorMessage = exception.message;
    }
    return {
      message: `Sorry, there was an error sending your message. Please try again later. Error: ${errorMessage}`,
      success: false,
    };
  }
}
