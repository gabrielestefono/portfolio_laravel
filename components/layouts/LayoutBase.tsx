import Header from "../Header";
import Footer from "../Footer";
import { PropsWithChildren, ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import styles from "./Layout.module.scss";

interface LayoutBaseProps {
  metaTags: ReactNode;
  blog?: boolean;
  estudeComigo?: boolean;
}

export default function LayoutBase({
  metaTags,
  children,
  blog = false,
  estudeComigo = false,
}: Readonly<PropsWithChildren<LayoutBaseProps>>) {
  return (
    <div className={styles.container}>
      <Header
        blog={blog}
        estudeComigo={estudeComigo}
        metaTags={metaTags}
      ></Header>
      <main>{children}</main>
      <Analytics />
      <SpeedInsights />
      <Footer></Footer>
    </div>
  );
}
