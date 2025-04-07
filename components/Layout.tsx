import Header from "./Header";
import Footer from "./Footer";
import { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import styles from "./Layout.module.css";

export default function Home({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className={styles.container}>
      <Header></Header>
      <main>{children}</main>
      <Analytics />
      <SpeedInsights />
      <Footer></Footer>
    </div>
  );
}
