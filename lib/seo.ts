import type { Metadata } from 'next';
export const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://websaz.site'
).replace(/\/$/, '');
export const siteName = 'وب‌ساز';
export const defaultDescription =
    'طراحی و توسعه وب‌سایت‌های حرفه‌ای، سریع و هدفمند برای رشد واقعی کسب‌وکارها.';
export function absoluteUrl(path = '/') {
    return new URL(
        path.startsWith('/') ? path : `/${path}`,
        `${siteUrl}/`,
    ).toString();
}
export function jsonLd(data: unknown) {
    return JSON.stringify(data).replace(/</g, '\\u003c');
}
function concise(value: string, maxLength: number) {
    if (value.length <= maxLength) return value;
    const shortened = value.slice(0, maxLength + 1);
    const lastSpace = shortened.lastIndexOf(' ');
    return `${shortened.slice(0, lastSpace > maxLength * 0.65 ? lastSpace : maxLength).trim()}…`;
}
export function pageMetadata(
    title: string,
    description: string,
    path: string,
    image = '/og.png',
): Metadata {
    const url = absoluteUrl(path);
    const seoTitle = concise(title, 58);
    const seoDescription = concise(description, 165);
    return {
        title: seoTitle,
        description: seoDescription,
        alternates: { canonical: url },
        robots: { index: true, follow: true },
        openGraph: {
            title: seoTitle,
            description: seoDescription,
            url,
            siteName,
            locale: 'fa_IR',
            type: 'website',
            images: [
                {
                    url: absoluteUrl(image),
                    width: image === '/og.png' ? 1672 : undefined,
                    height: image === '/og.png' ? 941 : undefined,
                    alt: seoTitle,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: seoTitle,
            description: seoDescription,
            images: [absoluteUrl(image)],
        },
    };
}
export function articleMetadata(
    title: string,
    description: string,
    path: string,
    publishedTime?: string | null,
    image = '/og.png',
): Metadata {
    const metadata = pageMetadata(title, description, path, image);
    return {
        ...metadata,
        openGraph: {
            ...metadata.openGraph,
            type: 'article',
            publishedTime: publishedTime || undefined,
        },
    };
}
export function noIndexMetadata(title: string): Metadata {
    return {
        title,
        robots: {
            index: false,
            follow: false,
            googleBot: { index: false, follow: false },
        },
    };
}
