import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer, Header, PageHero } from '../components';
import { pageMetadata } from '../../lib/seo';
import { servicePages } from './service-data';
export const metadata: Metadata = pageMetadata(
    'خدمات طراحی سایت',
    'خدمات طراحی سایت وب‌ساز؛ از سایت شرکتی و فروشگاه اینترنتی تا طراحی اختصاصی، UI/UX، وردپرس و سئو.',
    '/services',
);
export default function ServicesPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero
                    kicker="خدمات وب‌ساز"
                    title="خدمات طراحی و توسعه وب‌سایت"
                    text="هر خدمت صفحه‌ای مستقل دارد تا محدوده، کاربرد و خروجی آن را روشن بررسی کنید."
                />
                <section className="section container">
                    <div className="detail-grid">
                        {Object.entries(servicePages).map(([slug, item]) => (
                            <article key={slug}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <Link href={`/services/${slug}`}>
                                    اطلاعات {item.title} ←
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
