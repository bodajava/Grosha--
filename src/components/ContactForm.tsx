"use client";

import React, { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Failed to send");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-mute)", marginLeft: "4px" }}>Your Name</label>
        <input
          required
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{ width: "100%", padding: "16px 24px", borderRadius: "16px", background: "var(--paper)", border: "1px solid var(--line-soft)", color: "var(--ink)", outline: "none", fontSize: "14px", transition: "border 0.2s" }}
          onFocus={(e) => e.target.style.borderColor = "var(--coral)"}
          onBlur={(e) => e.target.style.borderColor = "var(--line-soft)"}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-mute)", marginLeft: "4px" }}>Email Address</label>
        <input
          required
          type="email"
          placeholder="email@domain.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{ width: "100%", padding: "16px 24px", borderRadius: "16px", background: "var(--paper)", border: "1px solid var(--line-soft)", color: "var(--ink)", outline: "none", fontSize: "14px", transition: "border 0.2s" }}
          onFocus={(e) => e.target.style.borderColor = "var(--coral)"}
          onBlur={(e) => e.target.style.borderColor = "var(--line-soft)"}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-mute)", marginLeft: "4px" }}>Message</label>
        <textarea
          required
          placeholder="Tell us about your requirements..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          style={{ width: "100%", padding: "16px 24px", borderRadius: "16px", background: "var(--paper)", border: "1px solid var(--line-soft)", color: "var(--ink)", outline: "none", fontSize: "14px", resize: "none", transition: "border 0.2s" }}
          onFocus={(e) => e.target.style.borderColor = "var(--coral)"}
          onBlur={(e) => e.target.style.borderColor = "var(--line-soft)"}
        />
      </div>

      {submitStatus === "success" && (
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "16px", borderRadius: "16px", background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.2)", color: "#10b981", fontSize: "13px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          <CheckCircle2 size={18} /> Message Sent Successfully!
        </div>
      )}

      {submitStatus === "error" && (
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "16px", borderRadius: "16px", background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.2)", color: "#ef4444", fontSize: "13px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Failed to send message. Please try again.
        </div>
      )}

      <button
        disabled={isSubmitting}
        type="submit"
        className="btn btn-primary"
        style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", padding: "20px" }}
      >
        {isSubmitting ? (
          <Loader2 size={20} className="animate-spin" />
        ) : (
          <>
            Send Message
            <span className="arrow">
              <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}><path d="M5 19L19 5M19 5H8M19 5v11" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
            </span>
          </>
        )}
      </button>
    </form>
  );
}
