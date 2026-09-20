import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer, Header, Icon, PageHero } from "../../components";
import { portfolio } from "../../data";
import { getItem } from "../../../lib/api";

export function generateStaticParams(){return portfolio.map(({slug})=>({project:slug}))}
export default async function ProjectPage({params}:{params:Promise<{project:string}>}){
  const {project}=await params; const fallback=portfolio.find(p=>p.slug===project); if(!fallback)notFound(); const item=await getItem("projects",project,fallback);
  return <><Header/><main><PageHero kicker="مطالعه موردی" title={item.title} text={`${item.category}؛ یک تجربه دیجیتال سریع، ساده و هدفمند.`}/><section className="section container case-study"><div className="case-show">{item.cover_url&&<div className="case-site-preview"><Image src={item.cover_url} alt={`نمای وب‌سایت ${item.title}`} fill priority sizes="(max-width: 900px) 100vw, 800px"/></div>}</div>{item.website_url&&<div className="center"><a className="btn primary" href={item.website_url} target="_blank" rel="noreferrer">مشاهده وب‌سایت زنده</a></div>}<div className="case-intro"><div><span>دستاورد کلیدی</span><strong>{item.result}</strong></div><div><span>خدمات</span><strong>استراتژی، UI/UX، توسعه</strong></div><div><span>نوع پروژه</span><strong>{item.category}</strong></div></div><div className="split case-body"><article><h2>معرفی پروژه</h2><p>{item.description||"طراحی و توسعه یک تجربه ساده و قابل اعتماد که اطلاعات را شفاف ارائه دهد و کاربران را با کمترین اصطکاک به اقدام اصلی برساند."}</p></article><article><h2>راهکار وب‌ساز</h2><p>ساختار محتوا و مسیرهای اصلی کاربر متناسب با محصولات و نیازهای واقعی کسب‌وکار طراحی و برای نمایش درست در موبایل بهینه شد.</p></article></div><div className="case-points">{(item.services||["شناخت نیاز کسب‌وکار","طراحی رابط کاربری","پیاده‌سازی واکنش‌گرا","بهینه‌سازی تجربه خرید"]).map((x,i)=><div key={x}><Icon value={`${i+1}`}/><b>{x}</b></div>)}</div><div className="next-case"><h2>پروژه بعدی شما می‌تواند اینجا باشد.</h2><Link className="btn primary" href="/contact">شروع یک پروژه جدید</Link></div></section></main><Footer/></>
}
