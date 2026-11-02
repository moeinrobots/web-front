'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const BrandFavicon = () => (
    <img
        className="brand-favicon"
        src="/favicon.svg"
        alt=""
        aria-hidden="true"
    />
);

export function Icon({ value }: { value: string }) {
    return <span className="icon">{value}</span>;
}
export function ContactCall({
    className = '',
    label = 'تماس جهت مشاوره',
}: {
    className?: string;
    label?: string;
}) {
    return (
        <a className={`${className} contact-call`} href="tel:+989157364942">
            {label}
        </a>
    );
}
export function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => setMenuOpen(false), [pathname]);
    useEffect(() => {
        if (!menuOpen) return;
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setMenuOpen(false);
        };
        document.addEventListener('keydown', closeOnEscape);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', closeOnEscape);
            document.body.style.overflow = previousOverflow;
        };
    }, [menuOpen]);
    return (
        <header className="header site-header">
            <div className="container nav site-nav-wrap">
                <Link className="brand site-brand" href="/">
                    <BrandFavicon />
                    <span>
                        وب‌ساز<small>طراحی برای رشد</small>
                    </span>
                </Link>
                <button
                    type="button"
                    className="menu sidebar-open"
                    aria-label="بازکردن منو"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setMenuOpen(true)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <button
                    type="button"
                    className={`sidebar-overlay ${menuOpen ? 'is-open' : ''}`}
                    aria-label="بستن منو"
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={() => setMenuOpen(false)}
                />
                <nav
                    id="mobile-navigation"
                    className={`site-nav ${menuOpen ? 'is-open' : ''}`}
                    data-sidebar="sidebar"
                    aria-label="منوی اصلی"
                    onClick={(e) => {
                        if ((e.target as HTMLElement).closest('a'))
                            setMenuOpen(false);
                    }}
                >
                    <div className="sidebar-head" data-sidebar="header">
                        <Link className="brand site-brand" href="/">
                            <BrandFavicon />
                            <span>
                                وب‌ساز<small>طراحی برای رشد</small>
                            </span>
                        </Link>
                        <button
                            type="button"
                            className="sidebar-close"
                            aria-label="بستن منو"
                            onClick={() => setMenuOpen(false)}
                        >
                            ×
                        </button>
                    </div>
                    <div className="nav-links" data-sidebar="menu">
                        <Link href="/">صفحه اصلی</Link>
                        <Link href="/services">خدمات</Link>
                        <Link href="/portfolio">نمونه‌کارها</Link>
                        <Link href="/pricing">تعرفه‌ها</Link>
                        <Link href="/about">درباره ما</Link>
                        <Link href="/blog">وبلاگ</Link>
                        <Link href="/contact">تماس با ما</Link>
                    </div>
                    <div className="sidebar-foot" data-sidebar="footer">
                        <span>برای شروع پروژه آماده‌اید؟</span>
                        <Link className="btn primary" href="/contact">
                            مشاوره رایگان <b>←</b>
                        </Link>
                        <ContactCall label="تماس جهت مشاوره" />
                        <a
                            href="https://t.me/WEBSAZ_ADMIN"
                            target="_blank"
                            rel="noreferrer"
                        >
                            پیام در تلگرام
                        </a>
                    </div>
                </nav>
                <Link className="btn primary nav-cta" href="/contact">
                    <span className="nav-cta-dot"></span>درخواست مشاوره رایگان
                </Link>
            </div>
        </header>
    );
}
export function Footer() {
    return (
        <footer>
            <div className="container footer-grid">
                <div>
                    <Link className="brand footer-brand" href="/">
                        <BrandFavicon /> وب‌ساز
                    </Link>
                    <p>
                        طراحی و توسعه وب‌سایت‌های مدرن، سریع و هدفمند برای رشد
                        واقعی کسب‌وکارها.
                    </p>
                </div>
                <div>
                    <b>خدمات</b>
                    <Link href="/services/ecommerce-website">
                        طراحی فروشگاه اینترنتی
                    </Link>
                    <Link href="/services/corporate-website">
                        طراحی سایت شرکتی
                    </Link>
                    <Link href="/services/custom-website">
                        طراحی سایت اختصاصی
                    </Link>
                    <Link href="/services/seo">سئو و بهینه‌سازی سایت</Link>
                </div>
                <div>
                    <b>دسترسی سریع</b>
                    <Link href="/portfolio">نمونه‌کارها</Link>
                    <Link href="/about">درباره ما</Link>
                    <Link href="/blog">مجله وب‌ساز</Link>
                    <Link href="/contact">تماس با ما</Link>
                </div>
                <div>
                    <b>ارتباط با ما</b>
                    <ContactCall label="تماس جهت مشاوره" />
                    <a
                        href="https://t.me/WEBSAZ_ADMIN"
                        target="_blank"
                        rel="noreferrer"
                    >
                        تلگرام
                    </a>
                    <a href="mailto:info@websaz.site">info@websaz.site</a>
                </div>
            </div>
            <div className="copyright container">
                <span>© ۱۴۰۵ وب‌ساز؛ همه حقوق محفوظ است.</span>
                <span>حریم خصوصی · قوانین و مقررات</span>
            </div>
        </footer>
    );
}
export function SectionTitle({
    kicker,
    title,
    text,
    align = 'center',
}: {
    kicker: string;
    title: string;
    text: string;
    align?: 'center' | 'right';
}) {
    return (
        <div className={`section-title ${align}`}>
            <span>{kicker}</span>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
}
export function Mockup({ compact = false }: { compact?: boolean }) {
    return (
        <div className={`mockup ${compact ? 'compact' : ''}`}>
            <div className="screen">
                <div className="screen-bar">
                    <i />
                    <i />
                    <i />
                </div>
                <div className="screen-body">
                    <div className="mini-nav" />
                    <h3>
                        فروشگاه آنلاین
                        <br />
                        <b>سبک زندگی مدرن</b>
                    </h3>
                    <span />
                    <button>مشاهده محصولات</button>
                    <div className="products">
                        <i />
                        <i />
                        <i />
                    </div>
                </div>
            </div>
            <div className="phone">
                <div />
                <b>خرید آسان</b>
                <i />
                <i />
            </div>
            <span className="badge b1">
                ↗<small>افزایش فروش</small>
            </span>
            <span className="badge b2">
                G<small>رتبه بهتر گوگل</small>
            </span>
        </div>
    );
}
export function PageHero({
    kicker,
    title,
    text,
}: {
    kicker: string;
    title: string;
    text: string;
}) {
    return (
        <section className="page-hero">
            <div className="container">
                <span className="eyebrow">{kicker}</span>
                <h1>{title}</h1>
                <p>{text}</p>
                <div className="crumb">
                    <Link href="/">خانه</Link>
                    <span>•</span>
                    <b>{title}</b>
                </div>
            </div>
        </section>
    );
}
