import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../components";
import { posts } from "../../data";
import { getItemOrNull } from "../../../lib/api";
import type { Post } from "../page";
import { pageMetadata } from "../../../lib/seo";

export async function generateStaticParams(){return posts.map(post=>({post:post.slug}))}
export async function generateMetadata({params}:{params:Promise<{post:string}>}):Promise<Metadata>{const {post}=await params;const fallback=posts.find(item=>item.slug===post);const item=await getItemOrNull<Post>("posts",post,fallback);return item?pageMetadata(item.title,item.excerpt,`/blog/${post}`):{robots:{index:false,follow:false}} }

export default async function PostPage({params}:{params:Promise<{post:string}>}){
  const {post}=await params;const fallback=posts.find(item=>item.slug===post);const item=await getItemOrNull<Post>("posts",post,fallback);if(!item)notFound();
  return <><Header/><main className="article-page"><header className="article-head"><div className="container"><div className="article-crumb"><Link href="/">خانه</Link><span>•</span><Link href="/blog">مجله</Link><span>•</span><b>{item.category}</b></div><span className="post-category">{item.category}</span><h1>{item.title}</h1><p>{item.excerpt}</p><small>{item.published_at&&new Date(item.published_at).toLocaleDateString("fa-IR",{year:"numeric",month:"long",day:"numeric"})}</small></div></header><article className="article-content container">{item.content.split(/\n\n+/).filter(Boolean).map((paragraph,index)=><p key={index}>{paragraph}</p>)}<div className="article-end"><b>برای اجرای این موضوع در پروژه خودتان نیاز به مشورت دارید؟</b><Link href="/contact">گفت‌وگو با تیم وب‌ساز ←</Link></div></article></main><Footer/></>;
}
