"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;
    const email = data.get("email") as string;
    const service = data.get("service") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Quote Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService Type: ${service}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:info@sigcarpet.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const inputClass =
    "w-full px-4 py-3 bg-transparent border border-cream/20 text-cream font-body placeholder:text-cream/40 focus:outline-none focus:border-teal transition-colors";

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-teal/15 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-teal"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-display text-3xl font-semibold text-cream mb-2">
          Thank You!
        </h3>
        <p className="text-cream/70 font-body">
          Your message is ready to send. We&apos;ll get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-teal font-semibold hover:underline font-body"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold text-cream/80 mb-1.5 font-body tracking-[0.15em] uppercase"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold text-cream/80 mb-1.5 font-body tracking-[0.15em] uppercase"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(541) 000-0000"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold text-cream/80 mb-1.5 font-body tracking-[0.15em] uppercase"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-xs font-semibold text-cream/80 mb-1.5 font-body tracking-[0.15em] uppercase"
          >
            Type of Service
          </label>
          <select
            id="service"
            name="service"
            required
            className={`${inputClass} appearance-none`}
          >
            <option value="" className="bg-navy">Select a service type</option>
            <option value="Residential" className="bg-navy">Residential</option>
            <option value="Commercial" className="bg-navy">Commercial</option>
            <option value="Rental" className="bg-navy">Rental</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-cream/80 mb-1.5 font-body tracking-[0.15em] uppercase"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your space"
            className={`${inputClass} resize-none`}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-teal text-white py-4 font-semibold tracking-[0.25em] uppercase hover:bg-teal/90 transition-colors font-body"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
