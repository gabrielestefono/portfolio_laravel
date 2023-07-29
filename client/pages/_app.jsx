import '@/styles/globals.scss';
import Layout from "../components/Layout";
import 'swiper/css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
