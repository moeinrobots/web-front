"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  result?: string;
  description?: string;
  services?: string[];
};

const categoryGroups = [
  { label: "همه پروژه‌ها", value: "all" },
  { label: "فروشگاهی", value: "فروشگاه اینترنتی" },
  { label: "شرکتی", value: "وب‌سایت شرکتی" },
  { label: "خدمات آنلاین", value: "online" },
  { label: "آموزشی", value: "پلتفرم آموزشی" },
];

function belongsTo(item: PortfolioItem, category: string) {
  if (category === "all") return true;
  if (category === "online") return ["رزرو خدمات پزشکی", "محصول مالی", "سفارش آنلاین"].includes(item.category);
  return item.category === category;
}

export function PortfolioList({ items }: { items: PortfolioItem[] }) {
  const [active, setActive] = useState("all");
  const visible = useMemo(() => items.filter((item) => belongsTo(item, active)), [active, items]);

  return (
    <>
      <div className="mkt-portfolio-filter" role="group" aria-label="فیلتر نمونه‌کارها">
        {categoryGroups.map((category) => (
          <button
            className={active === category.value ? "active" : ""}
            key={category.value}
            type="button"
            onClick={() => setActive(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mkt-portfolio-grid">
        {visible.map((item, index) => (
          <article className={`mkt-project-card tone-${(index % 4) + 1}`} key={item.slug}>
            <Link className="mkt-project-cover" href={`/portfolio/${item.slug}`} aria-label={`مشاهده پروژه ${item.title}`}>
              <span className="mkt-browser-dots"><i></i><i></i><i></i></span>
              <div className="mkt-project-screen">
                <small>{item.category}</small>
                <b>{item.title}</b>
                <span></span><span></span><span></span>
              </div>
            </Link>
            <div className="mkt-project-body">
              <div className="mkt-project-meta"><span>{item.category}</span><small>مطالعه موردی</small></div>
              <h2><Link href={`/portfolio/${item.slug}`}>{item.title}</Link></h2>
              <p>{item.description || item.result || "طراحی و توسعه وب‌سایت با تمرکز بر نیازهای اصلی کاربران و اهداف کسب‌وکار."}</p>
              {item.services && <div className="mkt-project-tags">{item.services.map((service) => <span key={service}>{service}</span>)}</div>}
              <Link className="mkt-project-link" href={`/portfolio/${item.slug}`}>مشاهده جزئیات پروژه <b>←</b></Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
