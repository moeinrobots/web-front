import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header, Icon, PageHero } from "../../components";
import { portfolio } from "../../data";
import { getItem } from "../../../lib/api";

export function generateStaticParams(){return portfolio.map(({slug})=>({project:slug}))}
export default async function ProjectPage({params}:{params:Promise<{project:string}>}){
  const {project}=await params; const fallback=portfolio.find(p=>p.slug===project); if(!fallback)notFound(); const item=await getItem("projects",project,fallback);
  return <><Header/><main><PageHero kicker="مطالعه موردی" title={item.title} text={`${item.category}؛ یک تجربه دیجیتال سریع، ساده و هدفمند.`}/><section className="section container case-study"><div className="case-show"><div className="browser-shot"><i/><i/><i/><div><b>{item.title}</b><span>{item.category}</span></div></div></div><div className="case-intro"><div><span>دستاورد کلیدی</span><strong>{item.result}</strong></div><div><span>خدمات</span><strong>استراتژی، UI/UX، توسعه</strong></div><div><span>زمان اجرا</span><strong>۸ هفته</strong></div></div><div className="split case-body"><article><h2>چالش پروژه</h2><p>ساخت تجربه‌ای ساده و قابل اعتماد که اطلاعات را شفاف ارائه دهد و کاربران را با کمترین اصطکاک به اقدام اصلی برساند.</p></article><article><h2>راهکار وب‌ساز</h2><p>پس از تحلیل رفتار کاربران، ساختار محتوا بازطراحی شد و یک سیستم بصری سریع، واکنش‌گرا و توسعه‌پذیر شکل گرفت.</p></article></div><div className="case-points">{["تحقیق و شناخت کاربر","طراحی سیستم رابط کاربری","پیاده‌سازی واکنش‌گرا","بهینه‌سازی سرعت و سئو"].map((x,i)=><div key={x}><Icon value={`${i+1}`}/><b>{x}</b></div>)}</div><div className="next-case"><h2>پروژه بعدی شما می‌تواند اینجا باشد.</h2><Link className="btn primary" href="/contact">شروع یک پروژه جدید</Link></div></section></main><Footer/></>
}
