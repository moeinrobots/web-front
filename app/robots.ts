import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/seo";
export default function robots():MetadataRoute.Robots{const production=process.env.NODE_ENV==="production";return {rules:{userAgent:"*",allow:production?"/":undefined,disallow:production?["/admin","/api/","/_next/"]:"/"},sitemap:absoluteUrl("/sitemap.xml")}}
