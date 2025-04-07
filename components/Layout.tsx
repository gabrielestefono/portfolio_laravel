import Header from "./Header";
import Footer from "./Footer";
import { PropsWithChildren } from "react";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home({ children }: Readonly<PropsWithChildren>) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header></Header>
      <main>{children}</main>
      <Analytics />
      <SpeedInsights />
      <Footer></Footer>
    </div>
  );
}
