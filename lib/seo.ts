import type { Metadata } from "next";
export const siteUrl=(process.env.NEXT_PUBLIC_SITE_URL||"https://websaz.site").replace(/\/$/,"");
export const siteName="وب‌ساز";
export const defaultDescription="طراحی و توسعه وب‌سایت‌های حرفه‌ای، سریع و هدفمند برای رشد واقعی کسب‌وکارها.";
export function absoluteUrl(path="/"){return new URL(path.startsWith("/")?path:`/${path}`,`${siteUrl}/`).toString()}
export function pageMetadata(title:string,description:string,path:string,image="/og.png"):Metadata{const url=absoluteUrl(path);return {title,description,alternates:{canonical:url},robots:{index:true,follow:true},openGraph:{title,description,url,siteName,locale:"fa_IR",type:"website",images:[{url:absoluteUrl(image),width:1536,height:1024,alt:title}]},twitter:{card:"summary_large_image",title,description,images:[absoluteUrl(image)]}}}
export function noIndexMetadata(title:string):Metadata{return {title,robots:{index:false,follow:false,googleBot:{index:false,follow:false}}}}
