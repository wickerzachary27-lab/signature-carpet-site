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
    const service = data.get("service") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Quote Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nService Type: ${service}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:info@sigcarpet.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-lg p-8 md:p-10 text-center">
        <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
        <h3 className="font-display text-2xl font-semibold text-navy mb-2">
          Thank You!
        </h3>
        <p className="text-navy/70 font-body">
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
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 md:p-10">
      <div className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-navy mb-1.5 font-body"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded border border-navy/15 bg-cream/50 text-navy font-body focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-navy mb-1.5 font-body"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded border border-navy/15 bg-cream/50 text-navy font-body focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold text-navy mb-1.5 font-body"
          >
            Type of Service
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full px-4 py-3 rounded border border-navy/15 bg-cream/50 text-navy font-body focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors appearance-none"
          >
            <option value="">Select a service type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Rental">Rental</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-navy mb-1.5 font-body"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 rounded border border-navy/15 bg-cream/50 text-navy font-body focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-teal text-white py-4 rounded font-semibold text-lg hover:bg-teal/90 transition-colors font-body"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
