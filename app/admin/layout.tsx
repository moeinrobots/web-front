import type { Metadata } from 'next';
import { absoluteUrl } from '../../lib/seo';
export const metadata: Metadata = {
    title: 'پنل مدیریت',
    alternates: { canonical: absoluteUrl('/admin') },
    robots: {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
    },
};
export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
