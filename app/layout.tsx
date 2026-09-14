import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import "./header.css";
import "./case.css";
import "./admin.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000"),
  title: {default:"وب‌ساز | طراحی و توسعه وب‌سایت حرفه‌ای",template:"%s | وب‌ساز"},
  description:"طراحی سایت شرکتی، فروشگاهی و اختصاصی با تمرکز بر تجربه کاربری، سرعت، سئو و رشد کسب‌وکار.",
  icons:{icon:"/favicon.svg"},
  openGraph:{title:"وب‌ساز | طراحی سایت برای رشد کسب‌وکار شما",description:"طراحی و توسعه وب‌سایت‌های مدرن، سریع و هدفمند.",images:[{url:"/og.png",width:1536,height:1024,alt:"وب‌ساز، طراحی سایت برای رشد کسب‌وکار شما"}],locale:"fa_IR",type:"website"},
  twitter:{card:"summary_large_image",title:"وب‌ساز | طراحی سایت حرفه‌ای",description:"وب‌سایتی که برای رشد کسب‌وکار شما ساخته شده است.",images:["/og.png"]},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fa" dir="rtl"><body>{children}</body></html>}
