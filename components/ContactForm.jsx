"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
  website: ""
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please share your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please add your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please use a valid email address.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please add a short message.";
    } else if (formData.message.trim().length < 20) {
      nextErrors.message = "Please include at least 20 characters.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value
    }));
    setErrors((current) => ({
      ...current,
      [name]: ""
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({ type: "error", message: "A few details still need your attention." });
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus({ type: "", message: "" });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Something went wrong.");
      }

      setFormData(initialState);
      setStatus({
        type: "success",
        message: payload.message || "Your message is on its way."
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Your message could not be sent right now."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 pt-12 pb-18 sm:scroll-mt-28 sm:pt-14 sm:pb-22">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
            Contact
          </p>
          <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl">
            Have an idea
            <br />
            worth exploring?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
            Whether you have a project in mind, a question to ask, or just want to
            start a conversation, I’d be glad to hear from you.
          </p>
        </div>

        <form className="glass-panel neon-ring rounded-[2rem] p-6 sm:p-8" noValidate onSubmit={handleSubmit}>
          <div className="grid gap-5">
            <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <FormField
              id="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Your name"
            />
            <FormField
              id="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="you@example.com"
            />
            <FormField
              id="message"
              label="Project details"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              placeholder="A quick overview of what you want to build..."
              multiline
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-fit px-6 py-3 text-sm font-black uppercase tracking-[0.18em] disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-text)]"
            >
              <span>{isSubmitting ? "Sending..." : "Send message"}</span>
            </button>

            {status.message ? (
              <p
                role="status"
                className={`rounded-2xl px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-[color:var(--success-border)] bg-[color:var(--success-bg)] text-[color:var(--success-text)]"
                    : "border-[color:var(--danger-border)] bg-[color:var(--danger-bg)] text-[color:var(--danger-text)]"
                }`}
              >
                {status.message}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}

function FormField({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  multiline = false
}) {
  const sharedProps = {
    id,
    name: id,
    value,
    onChange,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? `${id}-error` : undefined,
    placeholder,
    className:
      "w-full rounded-2xl border border-[color:var(--field-border)] bg-[color:var(--field-bg)] px-4 py-3 text-base text-[var(--color-text)] placeholder:text-[color:var(--field-placeholder)] backdrop-blur focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--field-focus-ring)]"
  };

  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-semibold uppercase tracking-[0.18em]">
        {label}
      </label>
      {multiline ? (
        <textarea {...sharedProps} rows={6} />
      ) : (
        <input {...sharedProps} type={type} />
      )}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-[color:var(--error-text)]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
