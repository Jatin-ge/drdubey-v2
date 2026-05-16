"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiFillLinkedin, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\d][\d\s()-]{6,}$/;

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formFields = event.currentTarget;

    const firstName = (formFields.first_name as HTMLInputElement).value.trim();
    const lastName = (formFields.last_name as HTMLInputElement).value.trim();
    const emailInput = (formFields.email as HTMLInputElement).value.trim();
    const phoneInput = (formFields.phone as HTMLInputElement).value.trim();
    const messageInput = (formFields.message as HTMLTextAreaElement).value.trim();
    const honeypot = (formFields.elements.namedItem("website") as HTMLInputElement)?.value || "";
    const fullNameInput = `${firstName} ${lastName}`.trim();

    // Honeypot: bots fill hidden fields; humans don't.
    if (honeypot) {
      toast.success("Thanks for contacting us! We'll get back to you soon.");
      formFields.reset();
      return;
    }

    if (!firstName) {
      toast.error("Please enter your first name.");
      return;
    }
    if (!emailInput || !EMAIL_REGEX.test(emailInput)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (phoneInput && !PHONE_REGEX.test(phoneInput)) {
      toast.error("Please enter a valid phone number (or leave it blank).");
      return;
    }
    if (!messageInput) {
      toast.error("Please write a message before sending.");
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post("/api/contact", {
        fullNameInput,
        emailInput,
        phoneInput: phoneInput || undefined,
        messageInput,
      });
      toast.success("Thanks for contacting us! We'll get back to you soon.");
      formFields.reset();
    } catch {
      toast.error(
        "Couldn't send your message. Please try again or WhatsApp us at +91 89553 73205."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/images/7.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(115px)",
      }}
      className="py-16 bg-gray-100 font-poppins dark:bg-gray-900"
    >
      <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto lg:py-10 md:px-7">
        <div className="max-w-xl mx-auto">
          <div className="text-center ">
            <div className="relative flex flex-col items-center">
              <h2 className="text-5xl font-bold dark:text-white">
                {" "}
                Our <span className="text-primary"> Contact</span>{" "}
              </h2>
              <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                <div className="flex-1 h-2 bg-blue-200"></div>
                <div className="flex-1 h-2 bg-blue-400"></div>
                <div className="flex-1 h-2 bg-primary"></div>
              </div>
            </div>
            <p className="mb-16 text-sm md:text-lg text-center text-gray-50">
              Drop your message here and feel free to enquire anything about us.
              We are happy to help.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mb-8 -mx-4">
          <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
            <div className="h-full py-12 text-center transition-all rounded-lg shadow dark:bg-gray-800 bg-gray-50 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-primary rounded-full dark:bg-primary">
                <AiFillLinkedin className="w-8 h-8" />
              </div>
              <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                Email
              </h2>
              <a
                href="mailto:connect@drdubay.in"
                className="text-base font-medium text-gray-500 md:text-lg dark:text-gray-400"
              >
                connect@drdubay.in
              </a>
            </div>
          </div>

          <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
            <div className="h-full py-12 text-center transition-all rounded-lg shadow dark:bg-gray-800 bg-gray-50 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-primary rounded-full dark:bg-primary">
                <AiFillInstagram className="w-8 h-8" />
              </div>
              <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                Phone
              </h2>
              <a
                href="tel:+918955373205"
                className="text-base font-medium text-gray-500 md:text-lg dark:text-gray-400"
              >
                +91 8955373205
              </a>
            </div>
          </div>

          <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
            <div className="h-full py-12 text-center transition-all rounded-lg shadow dark:bg-gray-800 bg-gray-50 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-primary rounded-full dark:bg-primary">
                <AiFillYoutube className="w-8 h-8" />
              </div>
              <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                Social
              </h2>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.facebook.com/drdheerajdubay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:text-blue-700"
                >
                  <FaFacebookF className="w-8 h-8" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCyPsbuVYgJyu-QfAT7bqtnw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 hover:text-blue-600"
                >
                  <FaYoutube className="w-8 h-8" />
                </a>
                <a
                  href="https://www.instagram.com/dheerajdubay1/?igshid=YmMyMTA2M2Y%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-500"
                >
                  <FaInstagram className="w-8 h-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dr-dheeraj-dubay-36399599/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  <FaLinkedinIn className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 py-8 bg-white border rounded-md shadow-md dark:border-gray-800 dark:bg-gray-800">
          <form onSubmit={handleClick} noValidate>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-700 dark:text-gray-400">
                Please send message for further information!{" "}
              </h2>
            </div>
            {/* Honeypot field — hidden from users, only bots fill it */}
            <div className="absolute -left-[9999px] w-0 h-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Website (leave blank)</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="flex flex-wrap mb-4 -mx-2">
              <div className="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
                <label
                  htmlFor="first_name"
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="first_name"
                  className="w-full px-3 py-2 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                  type="text"
                  placeholder="Your first name"
                  name="first_name"
                  required
                  disabled={isSubmitting}
                  autoComplete="given-name"
                />
              </div>
              <div className="w-full px-2 lg:w-1/2">
                <label
                  htmlFor="last_name"
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  id="last_name"
                  className="w-full px-3 py-2 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                  type="text"
                  placeholder="Your last name"
                  name="last_name"
                  disabled={isSubmitting}
                  autoComplete="family-name"
                />
              </div>
            </div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              className="w-full px-3 py-2 mb-4 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
              type="email"
              placeholder="you@example.com"
              name="email"
              required
              disabled={isSubmitting}
              autoComplete="email"
            />
            <label
              htmlFor="phone"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Phone <span className="text-gray-400 font-normal">(recommended &mdash; we&apos;ll call back faster)</span>
            </label>
            <input
              id="phone"
              className="w-full px-3 py-2 mb-4 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
              type="tel"
              placeholder="+91 98765 43210"
              name="phone"
              disabled={isSubmitting}
              autoComplete="tel"
            />
            <label
              htmlFor="message"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us briefly what you're looking for (e.g. knee pain consultation in Jaipur)..."
              className="block w-full px-4 mb-4 leading-tight text-gray-700 border rounded bg-gray-50 dark:placeholder-gray-400 py-3 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-700 "
              name="message"
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 text-sm font-bold leading-normal text-white transition-all duration-300 bg-primary rounded-md dark:bg-primary dark:hover:bg-primary hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
