"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = {
      name: String(form.get("name") || ""),
      phone: String(form.get("phone") || ""),
      email: String(form.get("email") || ""),
      projectType: String(form.get("projectType") || ""),
      message: String(form.get("message") || ""),
      website: String(form.get("website") || ""),
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api"}/leads`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(12000),
        },
      );
      if (!response.ok) throw new Error();
      setStatus("done");
      formElement.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form mkt-contact-form" onSubmit={submit}>
      <div className="contact-form-head">
        <span>فرم بررسی پروژه</span>
        <h2>درباره پروژه‌تان بنویسید</h2>
        <p>اطلاعات اولیه کمک می‌کند پیش از تماس، نیاز شما را دقیق‌تر بررسی کنیم.</p>
      </div>

      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="form-row">
        <label>
          نام و نام خانوادگی
          <input name="name" required minLength={2} autoComplete="name" placeholder="برای نمونه: سارا احمدی" />
        </label>
        <label>
          شماره تماس
          <input name="phone" required minLength={8} inputMode="tel" autoComplete="tel" placeholder="۰۹۱۲۱۲۳۴۵۶۷" />
        </label>
      </div>

      <div className="form-row">
        <label>
          ایمیل <small>اختیاری</small>
          <input name="email" type="email" autoComplete="email" placeholder="name@company.com" />
        </label>
        <label>
          نوع پروژه
          <select name="projectType" defaultValue="طراحی سایت شرکتی">
            <option>طراحی سایت شرکتی</option>
            <option>فروشگاه اینترنتی</option>
            <option>طراحی محصول اختصاصی</option>
            <option>بازطراحی و بهبود سایت</option>
            <option>سئو و بهینه‌سازی</option>
          </select>
        </label>
      </div>

      <label>
        شرح کوتاه پروژه
        <textarea
          name="message"
          rows={6}
          required
          minLength={10}
          placeholder="حوزه فعالیت، هدف اصلی وب‌سایت، امکانات موردنیاز و زمان تقریبی مدنظرتان را بنویسید."
        />
      </label>

      <div className="contact-submit-row">
        <button className="btn primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "در حال ثبت درخواست…" : "ثبت درخواست بررسی پروژه"}
        </button>
        <small>اطلاعات شما فقط برای بررسی همین درخواست استفاده می‌شود.</small>
      </div>

      <div className={`form-message ${status}`} role="status" aria-live="polite">
        {status === "done" && "درخواست شما با موفقیت ثبت شد. حداکثر تا پایان روز کاری بعد با شما تماس می‌گیریم."}
        {status === "error" && "ثبت درخواست انجام نشد. لطفاً دوباره تلاش کنید یا از طریق تلفن با ما در ارتباط باشید."}
      </div>
    </form>
  );
}
