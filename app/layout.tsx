import type { Metadata } from "next"; import "./globals.css";
export const metadata: Metadata = {title:"PayTrack — Vendor Payments",description:"Vendor payment due tracking dashboard"};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }