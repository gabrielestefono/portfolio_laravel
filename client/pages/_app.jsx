import '@/styles/globals.scss';
import Layout from '../components/Layout';
import 'swiper/css';

function MyApp({ Component, pageProps }) {
  // Define o atributo lang diretamente na tag <html>
  if (typeof window !== 'undefined') {
    document.documentElement.lang = 'pt-BR';
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
