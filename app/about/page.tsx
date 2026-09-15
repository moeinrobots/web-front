import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, PageHero } from "../components";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "با رویکرد، شیوه همکاری و اصول تیم وب‌ساز در طراحی و توسعه وب‌سایت‌های حرفه‌ای آشنا شوید.",
};

const principles = [
  {number:"۰۱",title:"شناخت پیش از طراحی",text:"کار را با شناخت کسب‌وکار، مخاطبان و هدف پروژه آغاز می‌کنیم. تصمیم‌های طراحی باید پاسخی روشن به یک نیاز واقعی باشند."},
  {number:"۰۲",title:"شفافیت در همکاری",text:"محدوده کار، زمان‌بندی، مسئولیت‌ها و هزینه‌ها پیش از شروع مشخص می‌شوند و وضعیت هر مرحله قابل پیگیری است."},
  {number:"۰۳",title:"سادگی در تجربه کاربر",text:"ساختار و رابط را به‌گونه‌ای طراحی می‌کنیم که مخاطب بدون سردرگمی به اطلاعات یا اقدام موردنظر برسد."},
  {number:"۰۴",title:"کیفیت قابل نگهداری",text:"محصول نهایی باید سریع، امن و توسعه‌پذیر باشد و تیم شما بتواند محتوای روزمره را به‌سادگی مدیریت کند."},
];

export default function AboutPage(){
  return <>
    <Header/>
    <main>
      <PageHero kicker="درباره وب‌ساز" title="همکاری منظم برای ساخت یک وب‌سایت کارآمد" text="وب‌ساز یک تیم طراحی و توسعه است که به کسب‌وکارها کمک می‌کند حضور دیجیتال منسجم، قابل اعتماد و قابل توسعه‌ای داشته باشند."/>

      <section className="section about-story"><div className="container about-story-grid">
        <div className="about-story-copy"><span className="eyebrow">نگاه ما به طراحی سایت</span><h2>ظاهر خوب، تنها بخشی از یک پروژه موفق است</h2><p>یک وب‌سایت حرفه‌ای باید در چند سطح درست عمل کند: پیام کسب‌وکار را روشن منتقل کند، مسیر استفاده ساده‌ای داشته باشد و از نظر فنی برای رشد آینده آماده باشد. به همین دلیل طراحی را جدا از محتوا، فناوری و اهداف تجاری نمی‌بینیم.</p><p>در هر همکاری ابتدا مسئله را تعریف می‌کنیم، سپس ساختار و اولویت‌ها را مشخص می‌کنیم و بعد به سراغ طراحی و اجرا می‌رویم. این ترتیب باعث می‌شود تصمیم‌ها بر پایه نیاز پروژه باشند، نه سلیقه لحظه‌ای یا الگوهای آماده.</p><Link className="text-link" href="/contact">درباره پروژه خودتان با ما گفت‌وگو کنید ←</Link></div>
        <div className="about-manifesto"><span>رویکرد ما</span><blockquote>«وب‌سایت زمانی ارزشمند است که کار مخاطب را ساده‌تر و تصمیم‌گیری او را روشن‌تر کند.»</blockquote><div><b>هدف مشخص</b><i></i><b>طراحی سنجیده</b><i></i><b>اجرای پایدار</b></div></div>
      </div></section>

      <section className="section pale about-principles"><div className="container">
        <div className="section-title"><span>اصول همکاری</span><h2>معیارهایی که کیفیت کار را تعریف می‌کنند</h2><p>این اصول در تمام مراحل، از جلسه نخست تا تحویل و پشتیبانی، مبنای تصمیم‌گیری ما هستند.</p></div>
        <div className="about-principles-grid">{principles.map(item=><article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </div></section>

      <section className="section about-working"><div className="container about-working-grid">
        <div><span className="eyebrow">شیوه کار</span><h2>شما در جریان تصمیم‌ها و پیشرفت پروژه هستید</h2><p>پروژه به مراحل کوتاه و مشخص تقسیم می‌شود. در پایان هر مرحله خروجی قابل بررسی ارائه می‌کنیم و پس از دریافت بازخورد، وارد مرحله بعد می‌شویم.</p></div>
        <div className="about-working-list"><article><b>جلسه تحلیل</b><p>اهداف، مخاطبان، محتوا و امکانات موردنیاز را بررسی می‌کنیم.</p></article><article><b>پیشنهاد اجرایی</b><p>محدوده کار، زمان‌بندی و هزینه هر بخش به‌صورت مکتوب ارائه می‌شود.</p></article><article><b>طراحی و توسعه مرحله‌ای</b><p>خروجی‌ها در نقاط مشخص ارائه می‌شوند تا فرصت بررسی و اصلاح وجود داشته باشد.</p></article><article><b>تحویل و همراهی</b><p>پس از آزمون نهایی، آموزش مدیریت سایت و دوره پشتیبانی آغاز می‌شود.</p></article></div>
      </div></section>

      <section className="about-commitment"><div className="container"><div><span>تعهد ما در هر پروژه</span><h2>ارتباط روشن، تصمیم‌های مستند و خروجی قابل اتکا</h2></div><Link className="btn light" href="/contact">شروع همکاری</Link></div></section>
    </main>
    <Footer/>
  </>;
}
