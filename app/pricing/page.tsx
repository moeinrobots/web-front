import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, PageHero } from "../components";

export const metadata: Metadata = {
  title: "تعرفه طراحی سایت",
  description: "بازه هزینه طراحی سایت شرکتی، فروشگاهی و محصولات اختصاصی، همراه با جزئیات خدمات و نحوه برآورد پروژه.",
};

const plans = [
  {
    name: "سایت شرکتی پایه",
    audience: "مناسب مجموعه‌های خدماتی و شرکت‌های کوچک",
    price: "شروع از ۳۸ میلیون تومان",
    time: "زمان اجرا: حدود ۴ تا ۶ هفته",
    features: [
      "طراحی تا ۵ صفحه اصلی بر پایه هویت بصری برند",
      "نسخه واکنش‌گرا برای موبایل، تبلت و دسکتاپ",
      "پنل مدیریت محتوا و آموزش کار با آن",
      "بهینه‌سازی فنی اولیه برای موتورهای جست‌وجو",
      "۴۵ روز پشتیبانی پس از تحویل",
    ],
  },
  {
    name: "سایت شرکتی پیشرفته",
    audience: "مناسب برندهای در حال توسعه و شرکت‌های چندخدمتی",
    price: "شروع از ۶۸ میلیون تومان",
    time: "زمان اجرا: حدود ۶ تا ۸ هفته",
    popular: true,
    features: [
      "طراحی رابط اختصاصی تا ۱۰ صفحه",
      "تحلیل ساختار محتوا و مسیرهای اصلی کاربر",
      "بخش وبلاگ، خدمات، نمونه‌کار و فرم‌های پیشرفته",
      "اتصال سرویس‌های پایه مانند پیامک و آمار بازدید",
      "سه ماه پشتیبانی پس از تحویل",
    ],
  },
  {
    name: "فروشگاه و محصول اختصاصی",
    audience: "مناسب فروش آنلاین و فرایندهای نرم‌افزاری ویژه",
    price: "برآورد پس از جلسه تحلیل",
    time: "زمان اجرا: از ۸ هفته",
    features: [
      "تحلیل فرایندها و تدوین محدوده دقیق پروژه",
      "طراحی تجربه کاربری و رابط اختصاصی",
      "حساب کاربری، پرداخت و اتصال به سرویس‌های موردنیاز",
      "آزمون عملکرد، امنیت و سناریوهای اصلی",
      "برنامه پشتیبانی متناسب با مقیاس محصول",
    ],
  },
];

const shared = [
  ["مالکیت کامل", "فایل‌های طراحی و سورس پروژه پس از تسویه در اختیار شما قرار می‌گیرد."],
  ["تحویل مرحله‌ای", "روند کار در چند مرحله مشخص ارائه و تأیید می‌شود."],
  ["تست پیش از انتشار", "صفحات و مسیرهای اصلی پیش از راه‌اندازی نهایی بررسی می‌شوند."],
  ["آموزش مدیریت", "در زمان تحویل، نحوه مدیریت بخش‌های موردنیاز آموزش داده می‌شود."],
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          kicker="تعرفه خدمات"
          title="برآورد شفاف، متناسب با ابعاد پروژه"
          text="هزینه نهایی هر پروژه به تعداد صفحات، امکانات فنی و سطح طراحی اختصاصی بستگی دارد. بازه‌های زیر برای تصمیم‌گیری اولیه در نظر گرفته شده‌اند."
        />

        <section className="section mkt-pricing-section">
          <div className="container">
            <div className="mkt-pricing-intro">
              <div>
                <span className="eyebrow">انتخاب مسیر مناسب</span>
                <h2>هر بسته، یک نقطه شروع برای گفت‌وگو است</h2>
              </div>
              <p>پس از بررسی نیازها، پیشنهاد فنی، زمان‌بندی و هزینه هر مرحله به‌صورت مکتوب ارائه می‌شود تا پیش از شروع، محدوده کار برای هر دو طرف روشن باشد.</p>
            </div>

            <div className="mkt-pricing-grid">
              {plans.map((plan) => (
                <article className={plan.popular ? "mkt-price-card featured" : "mkt-price-card"} key={plan.name}>
                  {plan.popular && <span className="mkt-price-badge">پیشنهاد متداول</span>}
                  <div className="mkt-price-head">
                    <h2>{plan.name}</h2>
                    <p>{plan.audience}</p>
                  </div>
                  <strong>{plan.price}</strong>
                  <span className="mkt-price-time">{plan.time}</span>
                  <ul>
                    {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                  <Link className={plan.popular ? "btn primary" : "btn secondary"} href="/contact">درخواست برآورد دقیق</Link>
                </article>
              ))}
            </div>

            <div className="mkt-price-note">
              <b>درباره مبالغ اعلام‌شده</b>
              <p>مبالغ بالا قیمت پایه هستند و پس از مشخص‌شدن امکانات نهایی می‌شوند. هزینه دامنه، فضای میزبانی، سرویس پیامک، درگاه و سایر خدمات شخص ثالث جداگانه محاسبه خواهد شد.</p>
            </div>
          </div>
        </section>

        <section className="section pale mkt-shared-section">
          <div className="container">
            <div className="section-title">
              <span>در تمام پروژه‌ها</span>
              <h2>اصولی که بخشی از فرایند اجرای ماست</h2>
            </div>
            <div className="mkt-shared-grid">
              {shared.map(([title, text], index) => (
                <article key={title}>
                  <span>۰{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mkt-inline-cta">
          <div className="container">
            <div>
              <span>برای برآورد دقیق‌تر</span>
              <h2>نیازهای پروژه را با ما در میان بگذارید</h2>
              <p>پس از یک گفت‌وگوی کوتاه، پیشنهاد اجرایی متناسب با اولویت‌ها و بودجه شما آماده می‌کنیم.</p>
            </div>
            <Link className="btn light" href="/contact">شروع گفت‌وگو</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
