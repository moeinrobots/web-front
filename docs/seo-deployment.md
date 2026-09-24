# SEO deployment checklist

The canonical production host is `https://websaz.site` (non-`www`). Configure the hosting layer before DNS cutover:

- Redirect every `http://websaz.site/*` to the matching HTTPS URL with a permanent 308 (301 is also acceptable).
- Redirect `https://www.websaz.site/*` to the matching `https://websaz.site/*` URL with a permanent 308.
- Preserve the path and query string during redirects; do not redirect all paths to the homepage.
- Keep one trailing-slash policy consistent with the framework and let the canonical metadata reflect it.
- Confirm `https://websaz.site/robots.txt` and `https://websaz.site/sitemap.xml` return 200 after deploy.
- Add and verify the property in Google Search Console, then submit `https://websaz.site/sitemap.xml`.
- Inspect representative pages in URL Inspection and request indexing only after redirects and metadata are live.

The application intentionally does not guess provider-specific redirect configuration. Apply the equivalent rules in the actual CDN, reverse proxy, or hosting provider.
