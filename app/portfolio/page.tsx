import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, PageHero } from "../components";
import { portfolio } from "../data";
import { PortfolioList, type PortfolioItem } from "./portfolio-list";

export const metadata: Metadata = {
  title: "نمونه‌کارها",
  description: "نمونه پروژه‌های طراحی سایت شرکتی، فروشگاه اینترنتی و محصولات آنلاین، همراه با شرح مسئله و خدمات انجام‌شده.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          kicker="نمونه‌کارها"
          title="پروژه‌هایی با مسئله و راه‌حل مشخص"
          text="در هر پروژه تلاش کرده‌ایم طراحی بصری، ساختار محتوا و توسعه فنی در خدمت هدف واقعی کسب‌وکار باشند. در ادامه بخشی از تجربه‌های اجرایی ما را می‌بینید."
        />

        <section className="section mkt-portfolio-section">
          <div className="container">
            <div className="mkt-portfolio-intro">
              <div>
                <span className="eyebrow">منتخب پروژه‌ها</span>
                <h2>از تعریف مسئله تا اجرای نهایی</h2>
              </div>
              <p>این مجموعه، حوزه‌های مختلفی از وب‌سایت شرکتی تا فروشگاه و محصول آنلاین را پوشش می‌دهد. برای مشاهده فرایند و جزئیات هر پروژه، مطالعه موردی آن را باز کنید.</p>
            </div>
            <PortfolioList items={portfolio as PortfolioItem[]} />
          </div>
        </section>

        <section className="mkt-inline-cta">
          <div className="container">
            <div>
              <span>پروژه بعدی می‌تواند متعلق به شما باشد</span>
              <h2>اگر مسئله مشخصی دارید، درباره راه‌حل آن گفت‌وگو کنیم</h2>
              <p>برای شروع، شرح کوتاهی از کسب‌وکار، مخاطبان و هدف اصلی پروژه کافی است.</p>
            </div>
            <Link className="btn light" href="/contact">ثبت درخواست پروژه</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
