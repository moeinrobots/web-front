import type { MetadataRoute } from 'next';
import { absoluteUrl } from '../lib/seo';
import { portfolio, posts as fallbackPosts } from './data';
import { getCollection } from '../lib/api';
import type { Post } from './blog/page';
import { servicePages } from './services/service-data';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getCollection<Post>('posts', fallbackPosts);
    const routes = [
        '/',
        '/services',
        '/portfolio',
        '/pricing',
        '/about',
        '/contact',
        '/blog',
        ...Object.keys(servicePages).map((slug) => `/services/${slug}`),
    ];
    return [
        ...routes.map((url) => ({
            url: absoluteUrl(url),
            changeFrequency: url === '/blog' ? ('weekly' as const) : ('monthly' as const),
            priority: url === '/' ? 1 : 0.8,
        })),
        ...portfolio.map((item) => ({
            url: absoluteUrl(`/portfolio/${item.slug}`),
            changeFrequency: 'yearly' as const,
            priority: 0.7,
        })),
        ...posts
            .filter((p) => p.is_published !== false)
            .map((p) => ({
                url: absoluteUrl(`/blog/${p.slug}`),
                lastModified: p.published_at ? new Date(p.published_at) : undefined,
                changeFrequency: 'monthly' as const,
                priority: 0.7,
            })),
    ];
}
