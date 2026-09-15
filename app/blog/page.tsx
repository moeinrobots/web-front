import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, PageHero } from "../components";
import { posts as fallbackPosts } from "../data";
import { getCollection } from "../../lib/api";

export const metadata: Metadata = {title:"مجله وب‌ساز",description:"مقاله‌های کاربردی درباره طراحی سایت، تجربه کاربری، سئو و مدیریت پروژه‌های دیجیتال."};
export type Post={slug:string;title:string;excerpt:string;content:string;category:string;cover_url?:string|null;published_at?:string|null;is_published?:boolean};

function date(value?:string|null){return value?new Date(value).toLocaleDateString("fa-IR",{year:"numeric",month:"long",day:"numeric"}):""}

export default async function BlogPage(){
  const posts=await getCollection<Post>("posts",fallbackPosts);
  const [featured,...rest]=posts;
  return <>
    <Header/><main>
      <PageHero kicker="مجله وب‌ساز" title="مطالبی برای تصمیم‌های دقیق‌تر در فضای دیجیتال" text="تجربه‌های اجرایی و راهنماهای روشن درباره طراحی سایت، تجربه کاربری، سئو و مدیریت بهتر پروژه‌های وب."/>
      <section className="section editorial-blog"><div className="container">
        {featured&&<article className="featured-post"><div className="featured-post-cover"><span>{featured.category}</span><div><i></i><i></i><i></i></div></div><div className="featured-post-copy"><span className="post-category">مطلب منتخب · {featured.category}</span><h2><Link href={`/blog/${featured.slug}`}>{featured.title}</Link></h2><p>{featured.excerpt}</p><div><small>{date(featured.published_at)}</small><Link href={`/blog/${featured.slug}`}>مطالعه مقاله <b>←</b></Link></div></div></article>}
        <div className="editorial-heading"><div><span className="eyebrow">تازه‌ترین مطالب</span><h2>یادداشت‌ها و راهنماهای کاربردی</h2></div><p>محتواها بر اساس پرسش‌های رایج مشتریان و تجربه پروژه‌های واقعی نوشته می‌شوند.</p></div>
        <div className="editorial-grid">{rest.map((post,index)=><article className={`editorial-card editorial-tone-${index%3+1}`} key={post.slug}><Link className="editorial-cover" href={`/blog/${post.slug}`}><span>{post.category}</span><div><i></i><i></i><i></i><b></b></div></Link><div className="editorial-card-body"><small>{date(post.published_at)}</small><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><Link className="editorial-link" href={`/blog/${post.slug}`}>ادامه مطلب <b>←</b></Link></div></article>)}</div>
        {!posts.length&&<div className="blog-empty"><h2>هنوز مطلبی منتشر نشده است</h2><p>نوشته‌های تازه به‌زودی در این بخش منتشر می‌شوند.</p></div>}
      </div></section>
    </main><Footer/>
  </>;
}
