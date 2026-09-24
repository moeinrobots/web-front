import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/seo";
import { portfolio } from "./data";
import { getCollection } from "../lib/api";
import type { Post } from "./blog/page";
export default async function sitemap():Promise<MetadataRoute.Sitemap>{const now=new Date();const posts=await getCollection<Post>("posts",[]);const routes=["/","/services","/portfolio","/pricing","/about","/contact","/blog"];return [...routes.map(url=>({url:absoluteUrl(url),lastModified:now})),...portfolio.map(item=>({url:absoluteUrl(`/portfolio/${item.slug}`),lastModified:now})),...posts.filter(p=>p.is_published!==false).map(p=>({url:absoluteUrl(`/blog/${p.slug}`),lastModified:p.published_at?new Date(p.published_at):now}))]}
