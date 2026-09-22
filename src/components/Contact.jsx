
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("sending");

    emailjs.sendForm(
  "service_k308h9g",   // service ID 
  "template_6ykkb2m",  // template ID 
  form.current,
  { publicKey: "OD7O715vwUadRxuuU" }
)
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
       (error) => {
  console.error("EmailJS Error:", error);
  setStatus("error");
}
      );
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-gray-50 px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Get In Touch
          </p>

          <h2
            id="contact-heading"
            className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Contact Us
          </h2>

          <p className="mt-3 text-gray-600">
            Have a question, suggestion, or need assistance?
            Send us a message and our team will get back to you.
          </p>
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="rounded-xl bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Full Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
                autoComplete="name"
                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="0800 000 0000"
                autoComplete="tel"
                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is your message about?"
                required
                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message here..."
                required
                className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              />
            </div>

            {/* Status */}
            {status === "success" && (
              <div
                className="md:col-span-2 rounded-md bg-green-50 p-4 text-sm text-green-700"
                role="status"
              >
                Your message has been sent successfully. Thank you for
                contacting the Ministry of Health.
              </div>
            )}

            {status === "error" && (
              <div
                className="md:col-span-2 rounded-md bg-red-50 p-4 text-sm text-red-700"
                role="alert"
              >
                Something went wrong while sending your message.
                Please try again.
              </div>
            )}

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="cursor-pointer inline-flex min-h-11 w-full items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
