import type { Metadata } from "next";
import { ContactForm } from "../contact-form";
import { Footer, Header, PageHero } from "../components";

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "برای بررسی پروژه طراحی سایت، بازطراحی، فروشگاه اینترنتی یا خدمات سئو با تیم وب‌ساز در ارتباط باشید.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          kicker="ارتباط با ما"
          title="برای بررسی دقیق پروژه، از همین‌جا شروع کنیم"
          text="شرح کوتاهی از کسب‌وکار و نیازتان بنویسید. درخواست شما بررسی می‌شود و حداکثر تا پایان روز کاری بعد برای هماهنگی گفت‌وگو با شما تماس می‌گیریم."
        />

        <section className="section mkt-contact-section">
          <div className="container mkt-contact-grid">
            <ContactForm />

            <aside className="mkt-contact-aside">
              <div className="mkt-contact-aside-head">
                <span>راه‌های ارتباطی</span>
                <h2>پاسخ‌گویی روشن و پیگیری منظم</h2>
                <p>برای پرسش‌های اولیه می‌توانید مستقیماً تماس بگیرید، در تلگرام پیام بدهید یا ایمیل بفرستید.</p>
              </div>

              <a className="mkt-contact-method" href="tel:+989157364942">
                <i>☎</i>
                <span><small>شماره تماس</small><b dir="ltr">۰۹۱۵۷۳۶۴۹۴۲</b></span>
              </a>
              <a className="mkt-contact-method" href="mailto:info@websaz.site">
                <i>✉</i>
                <span><small>پست الکترونیکی</small><b dir="ltr">info@websaz.site</b></span>
              </a>
              <a className="mkt-contact-method" href="https://t.me/+989157364942" target="_blank" rel="noreferrer">
                <i>➤</i>
                <span><small>پیام‌رسان</small><b>تلگرام</b></span>
              </a>
              <div className="mkt-contact-method">
                <i>◷</i>
                <span><small>ساعات پاسخ‌گویی</small><b>شنبه تا چهارشنبه، ۹ تا ۱۷</b></span>
              </div>

              <div className="mkt-meeting-note">
                <b>جلسه آنلاین یا تلفنی</b>
                <p>جلسه‌های بررسی پروژه با هماهنگی قبلی، به‌صورت آنلاین یا تلفنی برگزار می‌شوند.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section pale mkt-contact-process">
          <div className="container">
            <div className="section-title">
              <span>پس از ثبت درخواست</span>
              <h2>ادامه مسیر چگونه است؟</h2>
            </div>
            <div className="mkt-process-grid">
              <article><span>۱</span><div><h3>بررسی اطلاعات</h3><p>نیازها و توضیحات ثبت‌شده پیش از تماس اولیه مطالعه می‌شوند.</p></div></article>
              <article><span>۲</span><div><h3>گفت‌وگوی کوتاه</h3><p>در یک تماس کوتاه، هدف پروژه، اولویت‌ها و محدودیت‌ها را مرور می‌کنیم.</p></div></article>
              <article><span>۳</span><div><h3>پیشنهاد مکتوب</h3><p>محدوده کار، زمان اجرا و برآورد هزینه به‌صورت روشن ارائه می‌شود.</p></div></article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
